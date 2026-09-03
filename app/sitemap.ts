import type { MetadataRoute } from "next"; import { projects } from "./data/projects";
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.SITE_URL!;
    const projectUrls = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
    }));
    return [
        { url: baseUrl, lastModified: new Date(), },
        { url: `${baseUrl}/about`, lastModified: new Date(), },
        { url: `${baseUrl}/contact`, lastModified: new Date(), },
        { url: `${baseUrl}/projects`, lastModified: new Date(), },
        ...projectUrls,];
}