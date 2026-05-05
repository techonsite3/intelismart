"use client";

import { useState } from "react";
import Image from "next/image";

type HeroVideoProps = {
  poster: {
    src: string;
    alt: string;
  };
};

export function HeroVideo({ poster }: HeroVideoProps) {
  const [ready, setReady] = useState(false);

  return (
    <div className="hero-media" aria-hidden="true">
      <Image
        src={poster.src}
        alt={poster.alt}
        fill
        priority
        sizes="100vw"
        className="hero-poster"
      />
      <video
        className={`hero-video ${ready ? "is-ready" : ""}`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster.src}
        onCanPlay={() => setReady(true)}
      >
        <source src="/video/intelismart-hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
