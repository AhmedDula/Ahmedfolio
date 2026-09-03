import ProjectsStack from "./_components/stacking-projects";
import { projects } from "./data/projects";
import ServiceSection from "./_components/ServiceSection";
import Hero from "./_components/Hero";
import Testimonials from "./_components/Testimonials";
import Intro from "./_components/Intro";
const baseUrl = process.env.SITE_URL;
if (!baseUrl) {
  throw new Error("SITE_URL is not defined");
}
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Ahmed Adel",
      url: baseUrl,
      jobTitle: "Full-Stack Developer & Designer",
      description:
        "Ahmed Adel is a Full-Stack Developer & Designer specializing in modern web experiences, React, Next.js, Node.js, UI/UX, animations, and performance.",
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Ahmed Adel Portfolio",
      description:
        "Portfolio of Ahmed Adel, a Full-Stack Developer & Designer.",
      publisher: { "@id": `${baseUrl}/#person` },
    },
  ],
};
export default function Home() {
  return (
    <>
      {" "}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="overflow-x-clip bg-background relative z-2">
        <Hero />
        <Intro />
        <ServiceSection />
        <ProjectsStack projects={projects} />
        <Testimonials />
      </main>
    </>
  );
}
