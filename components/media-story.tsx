import Image from "next/image";

export function MediaStory({
  id,
  eyebrow,
  title,
  titleLines,
  copy,
  video,
  poster,
  image,
  imageAlt,
  cta,
  align = "left"
}: {
  id: string;
  eyebrow: string;
  title: string;
  titleLines?: string[];
  copy: string;
  video?: string;
  poster?: string;
  image?: string;
  imageAlt?: string;
  cta: string;
  align?: "left" | "right";
}) {
  return (
    <section className={`media-story media-story-${align}`} id={id}>
      {image ? (
        <Image
          src={image}
          alt={imageAlt ?? ""}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      ) : (
        <video autoPlay muted loop playsInline preload="metadata" poster={poster}>
          <source src={video} type="video/mp4" />
        </video>
      )}
      <div className="media-scrim" />
      <div className="media-story-copy">
        <p className="label">{eyebrow}</p>
        <h2>
          {titleLines
            ? titleLines.map((line) => (
                <span className="title-line" key={line}>
                  {line}
                </span>
              ))
            : title}
        </h2>
        <p>{copy}</p>
        <a className="btn btn-light" href="/contact">
          {cta}
        </a>
      </div>
    </section>
  );
}
