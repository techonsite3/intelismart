import type { Metadata } from "next";
import Image from "next/image";
import { IndustryStoryExplorer } from "@/components/industry-story-explorer";
import { LeadCapture } from "@/components/lead-capture";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomMenu } from "@/components/sticky-bottom-menu";
import { buildPageMetadata } from "@/lib/seo";
import { buildoutStory, industries, industryStories } from "@/lib/site-content";

export const metadata: Metadata = buildPageMetadata({
  title: "Industries Served",
  description:
    "Explore how Intelismart supports churches, healthcare, legal, construction, manufacturing, hospitality, retail, and growing businesses with integrated infrastructure.",
  path: "/industries",
  image: "/images/industries/churches-nonprofits.jpg",
  imageAlt: "Industries Intelismart serves across commercial environments"
});

export default function IndustriesPage() {
  return (
    <main>
      <SiteHeader />
      <StickyBottomMenu />
      <section className="page-hero">
        <p className="label">Industries</p>
        <h1>Technology environments for organizations that cannot afford confusion.</h1>
        <p>
          Churches, clinics, retail spaces, offices, properties, and growing
          businesses all need infrastructure that works quietly in the background.
        </p>
        <LeadCapture />
      </section>
      <section className="page-grid-section">
        <div className="industry-page-grid">
          {industries.map((industry) => (
            <article className="industry-page-card" id={industry.slug} key={industry.slug} tabIndex={0}>
              <Image src={industry.image} alt={industry.alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
              <div>
                <h2>{industry.title}</h2>
                <p>{industry.text}</p>
                <p className="industry-card-story">{industry.story}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <IndustryStoryExplorer stories={industryStories} buildout={buildoutStory} />
      <SiteFooter />
    </main>
  );
}
