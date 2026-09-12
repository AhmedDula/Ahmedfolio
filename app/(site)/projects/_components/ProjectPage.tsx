"use client";

import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import { projects } from "../../data/projects";
import { FiArrowUpRight } from "react-icons/fi";

type Project = {
  slug: string;
  title: string;
  overview: string;
  coverImage: string;
  galleryImages: Array< { desktop: string; mobile: string }>;
  year: number;
  link:string;
  category:string;
  keywords: string[]
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
        yPercent: 15,
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
      
        <section aria-labelledby="project-title" className="f min-h-screen w-screen">
          <div className="h-screen w-screen overflow-hidden">
            <Image
              src={project.coverImage}
              preload
              width={1200}
              height={1080}
              quality={75}
              alt={project.title}
              className="img w-full h-full object-cover object-[50%_20%] opacity-0"
            />
          </div>

          <div className="e w-screen h-screen flex sm:flex-row flex-col sm:gap-3">
            <h1
              id="project-title"
              className="w-full text-title sm:text-heading text-center font-bold"
            >
              {project.title}
            </h1>

            <div className="w-full h-full text-title leading-none px-6  flex flex-col gap-6">
              <div>

              <h2 className="text-orange-600 text-lead font-mono">{"// Overview"}</h2>
              <p className="text-heading">{project.overview}</p>
              </div>
              <Link href={project.link} target="_blank" className="w-full border border-white/18 p-3 text-center bg-orange-700 hover:bg-orange-600 duration-300 relative rounded-es-3xl text-lead">Go {project.title}  <FiArrowUpRight  className="absolute top-0 right-0 "/></Link>
            </div> 
          </div>
        </section>

        <section
          aria-label={`${project.title} gallery`}
          className="min-h-screen w-full border-b-red-500 gap-6 flex flex-col"
        >
          {project.galleryImages.map((image, i) => (
            <div
              key={i}
              className="parallax-wraper h-screen overflow-hidden relative"
            >

              <picture>
                <source
                media="(max-width: 768px)"
                  srcSet={image.mobile}
                  type="image/avif"
                />
              <Image
                className="parallax-img absolute -top-50 object-cover w-screen h-[115%] will-change-transform"
                src={image.desktop}
                width={1400}
                height={1080}
                
                quality={75}
                alt={`${project.title} gallery image ${i + 1}`}
              />
              </picture>
            </div>
          ))}
        </section> 
        <section
          
          aria-labelledby="more-projects-title"
          className="w-screen h-full border-b border-white/9 bg-[#121111] px-4 sm:px-8 py-5 z-5 relative"
        >
          <h2
            id="more-projects-title"
            className="text-orange-700 font-semibold mix-blend-difference sticky top-0 w-fit h-fit z-9001"
          >
            {"// More Projects"}
          </h2>

          <div className="w-full min-h-screen h-fit grid grid-cols-1 xl:grid-cols-3 gap-6">
            {projects.map((mp, i) => {
              if (mp.slug === path) return null;

              return (
                <article key={i} className="flex flex-col  md:flex-row xl:flex-col gap-3 w-full">
                  <Link
                    href={`/projects/${mp.slug}`}
                    aria-label={`View project: ${mp.title}`}
                    className="w-full md:w-2/3 xl:w-full h-96 xl:h-120 md:h-100 border border-white/20 rounded-2xl overflow-hidden shrink-0"
                  >
                    <Image
                      src={mp.coverImage}
                      width={1200}
                      height={1080}
                      quality={75}
                      alt={mp.title}
                      className="w-full  h-full object-cover"
                    />
                  </Link>
                  <div className="w-full md:w-1/3 xl:w-full xl:h-[20%] border border-white/20 rounded-2xl px-3 sm:px-5 py-4 sm:py-10 xl:py-2 flex flex-col justify-between">
                    <h3 className="text-heading font-bold whitespace-nowrap">
                      {mp.title}
                    <p className="text-body font-mono text-white/70 font-light">({mp.year})</p>
                    </h3>
                    <ul className="text-body hidden md:block xl:hidden">
                   {mp.keywords.map((key,i)=>
                    <li key={i} className="sm:py-2 border-b border-white/20">
                    {key}
                    </li>
                   )}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
       
        <section className=" h-fit relative w-screen ">
        <h2
          
          className=" text-orange-700 font-semibold mix-blend-difference sticky top-0 w-fit h-fit z-9001 px-4 sm:px-8 py-5"
        >
          {"// Live Preview"}
        </h2>
        <div className="mt-40 ">
          {projects.map((p, i) => (
            <Link
              key={i}
              href={p.link}
              target="_blank"
              className="relative w-screen"
            >
              <div className="group px-4 sm:px-8 flex-row overflow-hidden py-5 font-mono text-white/50 hover:text-white  duration-300 flex justify-between items-center font-semibold border-b border-white/18 ">
                <span
                  className="
      absolute left-0 top-1/2
      h-0 w-screen
      -translate-y-1/2
      bg-orange-700
      transition-all duration-300
      group-hover:h-full
      -z-1
    "
                />
                <div className="flex gap-1 w-full flex-col sm:flex-row justify-between  ">
                  <div className="flex gap-1 w-full">
                    <h3 className="text-white whitespace-nowrap">{p.title}</h3>
                    <p className="">({p.year})</p>
                  </div>
                  <p className="w-full whitespace-nowrap flex sm:justify-center">{p.category}</p>
                </div>
                <div className="w-1/3 flex justify-end gap-5">
                  <FiArrowUpRight
                    size={25}
                    className=" group-hover:block sm:hidden text-white/90 "
                  />
                  <p className="group-hover:hidden hidden sm:block whitespace-nowrap">{`0 ${i + 1}`}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
    </main>
  );
}

export default ProjectPage;
