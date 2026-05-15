const baseUrl = process.argv[2] || process.env.SEO_AUDIT_BASE_URL || "https://intelismart.com";

function getMeta(html, name) {
  const patterns = [
    new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']*)["'][^>]*>`, "i"),
    new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+name=["']${name}["'][^>]*>`, "i")
  ];
  return patterns.map((pattern) => html.match(pattern)?.[1]).find(Boolean) || "";
}

function getProperty(html, property) {
  const patterns = [
    new RegExp(`<meta[^>]+property=["']${property}["'][^>]+content=["']([^"']*)["'][^>]*>`, "i"),
    new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+property=["']${property}["'][^>]*>`, "i")
  ];
  return patterns.map((pattern) => html.match(pattern)?.[1]).find(Boolean) || "";
}

function stripTags(value) {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function getJsonLdTypes(html) {
  const matches = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  const types = new Set();

  function collect(node) {
    if (!node || typeof node !== "object") return;
    const type = node["@type"];
    if (Array.isArray(type)) {
      type.forEach((item) => types.add(item));
    } else if (type) {
      types.add(type);
    }
    if (Array.isArray(node)) {
      node.forEach(collect);
    }
    if (Array.isArray(node["@graph"])) {
      node["@graph"].forEach(collect);
    }
    if (Array.isArray(node.itemListElement)) {
      node.itemListElement.forEach(collect);
    }
    if (Array.isArray(node.mainEntity)) {
      node.mainEntity.forEach(collect);
    }
  }

  matches.forEach((match) => {
    try {
      collect(JSON.parse(match[1]));
    } catch {
      types.add("Invalid JSON-LD");
    }
  });

  return [...types].sort();
}

async function getRoutes() {
  const sitemapUrl = new URL("/sitemap.xml", baseUrl).toString();
  const response = await fetch(sitemapUrl);
  if (!response.ok) {
    throw new Error(`Unable to fetch sitemap: ${response.status} ${response.statusText}`);
  }
  const sitemap = await response.text();
  return [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => {
    const path = new URL(match[1]).pathname;
    return new URL(path, baseUrl).toString();
  });
}

async function auditRoute(url) {
  const response = await fetch(url);
  const html = await response.text();
  const title = stripTags(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "");
  const description = getMeta(html, "description");
  const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["'][^>]*>/i)?.[1] || "";
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) => stripTags(match[1]));
  const imageTags = [...html.matchAll(/<img\b[^>]*>/gi)].map((match) => match[0]);
  const imagesMissingAlt = imageTags.filter((tag) => !/\salt=["'][^"']*["']/i.test(tag)).length;
  const genericAnchors = [...html.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/gi)]
    .map((match) => stripTags(match[1]).toLowerCase())
    .filter((text) => ["learn more", "view market page", "click here"].includes(text));

  return {
    url,
    status: response.status,
    title,
    descriptionLength: description.length,
    canonical,
    ogUrl: getProperty(html, "og:url"),
    h1Count: h1s.length,
    h1: h1s.join(" | "),
    schemaTypes: getJsonLdTypes(html).join(", "),
    imageCount: imageTags.length,
    imagesMissingAlt,
    genericAnchors: genericAnchors.length
  };
}

const routes = await getRoutes();
const results = [];

for (const route of routes) {
  results.push(await auditRoute(route));
}

console.table(results);

const failures = results.filter(
  (result) =>
    result.status >= 400 ||
    !result.title ||
    !result.canonical ||
    result.h1Count !== 1 ||
    result.imagesMissingAlt > 0 ||
    result.genericAnchors > 0
);

if (failures.length) {
  console.log("\nSEO checks needing review:");
  console.table(
    failures.map((failure) => ({
      url: failure.url,
      status: failure.status,
      title: Boolean(failure.title),
      canonical: Boolean(failure.canonical),
      h1Count: failure.h1Count,
      imagesMissingAlt: failure.imagesMissingAlt,
      genericAnchors: failure.genericAnchors
    }))
  );
  process.exitCode = 1;
} else {
  console.log("\nSEO checks passed for title, canonical, single H1, image alt attributes, and generic anchors.");
}
