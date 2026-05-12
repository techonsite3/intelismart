"use client";

import Image from "next/image";
import { useState } from "react";
import { AlertTriangle, CheckCircle2, ChevronDown, Layers3, Target, Wrench } from "lucide-react";
import type { IndustryStory } from "@/lib/site-content";

type BuildoutStory = {
  eyebrow: string;
  title: string;
  summary: string;
  image: string;
  alt: string;
  problems: string[];
  difference: string[];
  outcomes: string[];
  idealProjects: string[];
};

type IndustryStoryExplorerProps = {
  stories: IndustryStory[];
  buildout: BuildoutStory;
};

type StorySectionId = "pain" | "help" | "outcomes";

const sectionMeta: Record<
  StorySectionId,
  {
    title: string;
    icon: typeof AlertTriangle;
  }
> = {
  pain: {
    title: "Pain points",
    icon: AlertTriangle
  },
  help: {
    title: "What Intelismart does",
    icon: Wrench
  },
  outcomes: {
    title: "Outcomes",
    icon: CheckCircle2
  }
};

export function IndustryStoryExplorer({ stories, buildout }: IndustryStoryExplorerProps) {
  const [activeSlug, setActiveSlug] = useState(stories[0]?.slug || "");
  const [openSection, setOpenSection] = useState<StorySectionId>("pain");
  const activeStory = stories.find((story) => story.slug === activeSlug) || stories[0];

  if (!activeStory) {
    return null;
  }

  const sections: { id: StorySectionId; copy: string }[] = [
    { id: "pain", copy: activeStory.pain },
    { id: "help", copy: activeStory.help },
    { id: "outcomes", copy: activeStory.outcomes }
  ];

  return (
    <section className="industry-story-section" aria-labelledby="industry-story-title">
      <div className="industry-story-heading">
        <p className="label">Industry-Specific IT</p>
        <h2 id="industry-story-title">Infrastructure shaped around how each organization actually works.</h2>
        <p>
          Generic IT fixes symptoms. Intelismart maps pain, risk, solution, and outcome so the technology supports the
          workflows, compliance needs, revenue systems, and people inside each environment.
        </p>
      </div>

      <div className="industry-story-shell">
        <div className="industry-story-nav" role="tablist" aria-label="Industry stories">
          {stories.map((story) => (
            <button
              type="button"
              role="tab"
              aria-selected={story.slug === activeStory.slug}
              className={story.slug === activeStory.slug ? "is-active" : ""}
              key={story.slug}
              onClick={() => {
                setActiveSlug(story.slug);
                setOpenSection("pain");
              }}
            >
              <Layers3 aria-hidden="true" size={16} />
              <span>
                <strong>{story.title}</strong>
                <small>{story.eyebrow}</small>
              </span>
            </button>
          ))}
        </div>

        <article className="industry-story-panel" role="tabpanel">
          <div className="industry-story-visual">
            <Image
              src={activeStory.image}
              alt={activeStory.alt}
              fill
              sizes="(max-width: 980px) 100vw, 54vw"
            />
            <div>
              <p>{activeStory.eyebrow}</p>
              <h3>{activeStory.title}</h3>
            </div>
          </div>

          <div className="industry-story-copy">
            <p>{activeStory.summary}</p>

            <div className="industry-story-accordions">
              {sections.map(({ id, copy }) => {
                const meta = sectionMeta[id];
                const Icon = meta.icon;
                const open = openSection === id;
                const panelId = `industry-story-${activeStory.slug}-${id}`;

                return (
                  <div className={`industry-story-accordion ${open ? "is-open" : ""}`} key={id}>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenSection(id)}
                    >
                      <span>
                        <Icon aria-hidden="true" size={17} />
                        {meta.title}
                      </span>
                      <ChevronDown aria-hidden="true" size={17} />
                    </button>
                    {open ? (
                      <p id={panelId}>{copy}</p>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="industry-story-services" aria-label={`${activeStory.title} service areas`}>
              {activeStory.services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>
        </article>
      </div>

      <section className="industry-buildout-spotlight" aria-labelledby="industry-buildout-title">
        <div className="industry-buildout-image">
          <Image src={buildout.image} alt={buildout.alt} fill sizes="(max-width: 980px) 100vw, 44vw" />
        </div>
        <div className="industry-buildout-copy">
          <p className="label">{buildout.eyebrow}</p>
          <h2 id="industry-buildout-title">{buildout.title}</h2>
          <p>{buildout.summary}</p>

          <div className="industry-buildout-grid">
            <BuildoutList title="Problem we solve" icon={AlertTriangle} items={buildout.problems} />
            <BuildoutList title="What we do differently" icon={Target} items={buildout.difference} />
            <BuildoutList title="Outcomes" icon={CheckCircle2} items={buildout.outcomes} />
            <BuildoutList title="Ideal projects" icon={CheckCircle2} items={buildout.idealProjects} />
          </div>
        </div>
      </section>
    </section>
  );
}

function BuildoutList({
  title,
  icon: Icon,
  items
}: {
  title: string;
  icon: typeof AlertTriangle;
  items: string[];
}) {
  return (
    <div className="industry-buildout-list">
      <h3>
        <Icon aria-hidden="true" size={17} />
        {title}
      </h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
