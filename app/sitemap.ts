import type { MetadataRoute } from "next";
import { serviceAreaPages, services } from "@/lib/site-content";

const siteUrl = "https://intelismart.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about-intelismart",
    "/about",
    "/industries",
    "/services",
    "/service-areas",
    "/contact",
    "/portal"
  ];

  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const serviceAreaRoutes = serviceAreaPages.map((page) => `/service-areas/${page.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...serviceAreaRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/service-areas") ? 0.9 : 0.8
  }));
}
