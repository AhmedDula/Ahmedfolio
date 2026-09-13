import Hero from "./_components/Hero";
import Intro from "./_components/Intro";
import ServiceSection from "./_components/ServiceSection";
import ProjectsStack from "./_components/StackingProjects";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <main className="overflow-x-clip bg-background relative z-2">
      <Hero />
      <Intro />
      <ServiceSection />
      <ProjectsStack />
      <Testimonials />
    </main>
  );
}
