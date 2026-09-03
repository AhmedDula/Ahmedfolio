import type { Metadata } from "next";
import ProjectPage from "./_components/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Ahmed Adel's projects, featuring modern web applications and digital experiences built with Next.js, React, Node.js, and MongoDB.",
  alternates: {
    canonical: "/projects",
  },
};

function Page() {
  return <ProjectPage />;
}

export default Page;
