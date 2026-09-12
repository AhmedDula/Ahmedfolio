import ProjectsStack from "./_components/stacking-projects";
import { projects } from "./data/projects";
import ServiceSection from "./_components/ServiceSection";
import Hero from "./_components/Hero";
import Testimonials from "./_components/Testimonials";
import Intro from "./_components/Intro";

export default function Home() {
  return (
    <main className="overflow-x-clip bg-background relative z-2">
      <Hero />
      <Intro />
      <ServiceSection />
      <ProjectsStack projects={projects} />
      <Testimonials />
    </main>
  );
}
