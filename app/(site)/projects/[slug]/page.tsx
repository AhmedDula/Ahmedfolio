import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";
import ProjectPage from "../_components/ProjectPage";

type Props = {
  params: Promise<{ slug: string }>;
};

const baseUrl = process.env.SITE_URL!;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const title = `${project.title} | Ahmed Adel`;

  return {
    title: project.title,
    description: project.overview,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title,
      description: project.overview,
      url: `/projects/${project.slug}`,
      type: "website",
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: `${project.title} project by Ahmed Adel`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.overview,
      images: [project.coverImage],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${baseUrl}/projects/${project.slug}#project`,
    name: project.title,
    description: project.overview,
    url: `${baseUrl}/projects/${project.slug}`,
    image: project.coverImage,
    dateCreated: `${project.year}-01-01`,
    creator: {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Ahmed Adel",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectPage project={project} />
    </>
  );
}
