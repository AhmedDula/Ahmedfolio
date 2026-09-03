"use client";

import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import { projects } from "../../data/projects";

type Project = {
  slug: string;
  title: string;
  overview: string;
  coverImage: string;
  galleryImages: string[];
  year: number;
};

type ProjectPageProps = {
  project: Project;
};

function ProjectPage({ project }: ProjectPageProps) {
  const path = usePathname()?.split("/")[2] ?? "";

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".img", {
      scrollTrigger: {
        trigger: ".f",
        scrub: true,
        start: "top",
        end: "center",
        pin: ".img",
        pinSpacing: false,
      },
      opacity: 1,
      scale: 1.1,
    });

    gsap.utils.toArray<HTMLElement>(".parallax-wraper").forEach((wraper) => {
      const img = wraper.querySelector(".parallax-img") as HTMLElement | null;
      if (!img) return;

      gsap.to(img, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: wraper,
          start: "top center",
          end: "bottom center",
          scrub: 0.5,
        },
      });
    });
  }, [project]);

  return (
    <main className=" bg-background relative z-2">
      <article>
        <section aria-labelledby="project-title" className="f min-h-screen">
          <div className="h-screen max-w-screen overflow-hidden">
            <Image
              src={project.coverImage}
              width={1920}
              height={1080}
              quality={75}
              alt={project.title}
              className="img w-full h-full object-cover opacity-0"
            />
          </div>

          <div className="e w-full h-screen flex sm:flex-row flex-col sm:gap-3">
            <h1
              id="project-title"
              className="w-full text-title sm:text-hero text-center font-bold"
            >
              {project.title}
            </h1>

            <div className="w-full h-full text-title leading-none px-5 sm:px-1">
              <h2 className="text-orange-600 text-body">{"// Overview"}</h2>
              <p>{project.overview}</p>
            </div>
          </div>
        </section>

        <section
          aria-label={`${project.title} gallery`}
          className="min-h-screen w-full border-b-red-500 gap-6 flex flex-col"
        >
          {project.galleryImages.map((src, i) => (
            <div
              key={i}
              className="parallax-wraper h-screen overflow-hidden relative"
            >
              <Image
                className="parallax-img absolute -top-50 object-cover w-full h-[170%] will-change-transform"
                src={src}
                width={1200}
                height={1080}
                loading="eager"
                quality={75}
                alt={`${project.title} gallery image ${i + 1}`}
              />
            </div>
          ))}
        </section>

        <section
          id="testimonials"
          aria-labelledby="more-projects-title"
          className="w-screen h-full border-b border-white/9 bg-[#121111] px-4 sm:px-8 py-5 z-5 relative"
        >
          <h2
            id="more-projects-title"
            className="text-orange-700 font-semibold mix-blend-difference sticky top-0 w-fit h-fit z-9001"
          >
            {"// More Projects"}
          </h2>

          <div className="w-full min-h-screen flex flex-wrap md:flex-nowrap gap-6">
            {projects.map((mp, i) => {
              if (mp.slug === path) return null;

              return (
                <article key={i} className="flex flex-col gap-3">
                  <Link
                    href={`/projects/${mp.slug}`}
                    aria-label={`View project: ${mp.title}`}
                    className="w-full h-[90%] border border-white/20 rounded-2xl overflow-hidden"
                  >
                    <Image
                      src={mp.coverImage}
                      width={1920}
                      height={1080}
                      quality={75}
                      alt={mp.title}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="w-full h-[20%] border border-white/20 rounded-2xl px-5 py-10 sm:py-2 flex flex-col justify-center">
                    <h3 className="text-body sm:text-title font-bold">
                      {mp.title}
                    </h3>
                    <p className="text-body">({mp.year})</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </article>
    </main>
  );
}

export default ProjectPage;
