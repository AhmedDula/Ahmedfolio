import { projects } from "../../data/projects";
import { notFound } from "next/navigation";
import ProjectPage from "./ProjectPage";
import { log } from "console";

export default  async function Page({ params }) {
  const {slug} =  await params
  const project =  projects.find((p) => p.slug === slug);
  

  if (!project) return notFound();
  return <ProjectPage project={project} />;
}