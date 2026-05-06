import { NextResponse } from "next/server";

type CallbackPayload = {
  phone?: string;
  name?: string;
  email?: string;
  type?: string;
  services?: string[];
};

type RingCentralTokenResponse = {
  access_token?: string;
  token_type?: string;
  expires_in?: number;
  error?: string;
  error_description?: string;
};

const JWT_GRANT_TYPE = "urn:ietf:params:oauth:grant-type:jwt-bearer";

function normalizePhoneNumber(value: string) {
  const trimmed = value.trim();
  const digits = trimmed.replace(/\D/g, "");

  if (trimmed.startsWith("+") && digits.length >= 10 && digits.length <= 15) {
    return `+${digits}`;
  }

  if (digits.length === 10) {
    return `+1${digits}`;
  }

  if (digits.length === 11 && digits.startsWith("1")) {
    return `+${digits}`;
  }

  return null;
}

function getConfig() {
  const serverUrl = process.env.RINGCENTRAL_SERVER_URL || "https://platform.ringcentral.com";
  const clientId = process.env.RINGCENTRAL_CLIENT_ID;
  const clientSecret = process.env.RINGCENTRAL_CLIENT_SECRET;
  const jwt = process.env.RINGCENTRAL_JWT;
  const callerNumber = process.env.RINGCENTRAL_CALLER_NUMBER;

  if (!clientId || !clientSecret || !jwt) {
    return null;
  }

  return {
    serverUrl: serverUrl.replace(/\/$/, ""),
    clientId,
    clientSecret,
    jwt,
    callerNumber: callerNumber ? normalizePhoneNumber(callerNumber) : null
  };
}

async function getAccessToken(config: NonNullable<ReturnType<typeof getConfig>>) {
  const body = new URLSearchParams({
    grant_type: JWT_GRANT_TYPE,
    assertion: config.jwt
  });
  const credentials = Buffer.from(`${config.clientId}:${config.clientSecret}`).toString("base64");

  const response = await fetch(`${config.serverUrl}/restapi/oauth/token`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body
  });
  const data = (await response.json().catch(() => ({}))) as RingCentralTokenResponse;

  if (!response.ok || !data.access_token) {
    return {
      error: data.error_description || data.error || "RingCentral authentication failed",
      status: response.status
    };
  }

  return { accessToken: data.access_token };
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as CallbackPayload | null;
  const customerNumber = payload?.phone ? normalizePhoneNumber(payload.phone) : null;

  if (!customerNumber) {
    return NextResponse.json(
      { error: "Enter a valid US or international phone number." },
      { status: 400 }
    );
  }

  const config = getConfig();

  if (!config) {
    return NextResponse.json(
      { error: "RingCentral callback is not fully configured." },
      { status: 500 }
    );
  }

  const token = await getAccessToken(config);

  if ("error" in token) {
    return NextResponse.json(
      { error: token.error },
      { status: token.status || 500 }
    );
  }

  const ringOutBody = {
    ...(config.callerNumber ? { from: { phoneNumber: config.callerNumber } } : {}),
    to: { phoneNumber: customerNumber },
    playPrompt: process.env.RINGCENTRAL_RINGOUT_PLAY_PROMPT === "true"
  };

  const ringOutResponse = await fetch(
    `${config.serverUrl}/restapi/v1.0/account/~/extension/~/ring-out`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token.accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ringOutBody)
    }
  );
  const result = await ringOutResponse.json().catch(() => ({}));

  if (!ringOutResponse.ok) {
    return NextResponse.json(
      { error: "RingCentral could not start the callback." },
      { status: ringOutResponse.status }
    );
  }

  return NextResponse.json({
    ok: true,
    callbackId: typeof result === "object" && result && "id" in result ? result.id : undefined
  });
}
