"use client";
import React from "react";
import MobileNav from "../../_components/mobileNav";
import Nav from "../../_components/nav";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import { projects } from "../../data/projects";
import { usePathname } from "next/navigation";

function ProjectPage({ project }) {
  const path = usePathname().split("/")[2];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".img", {
      scrollTrigger: {
        trigger: ".f",
        scrub: true,
        start: "top ",
        end: "center",
        pin: ".img",
        pinSpacing: false,
      },
      opacity: 1,
      scale: 1.1,
    });

    gsap.utils.toArray(".parallax-wraper").forEach((wraper) => {
      const img = wraper.querySelector(".parallax-img");
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
    <main className="overflow-hidden bg-background relative z-2">
      {" "}
     
      <section className="f min-h-screen ">
        <div className="h-screen max-w-screen overflow-hidden ">
          <Image
            src={project.coverImage}
            width={1920}
            height={1080}
            quality={75}
            alt={project.title}
            className="img w-full h-full object-cover opacity-0"
          />
        </div>
        <div className="e w-full h-screen flex sm:flex-row flex-col sm:gap-3 ">
          <p className="w-full text-title sm:text-hero text-center font-bold">
            {project.title}
          </p>
          <p className="w-full h-full text-title leading-none px-5 sm:px-1">
            <span className="text-orange-600 text-body">{"// Overview"}</span>
            <br />
            {project.overview}
          </p>
        </div>
      </section>
      <section className="min-h-screen w-full border-b-red-500 gap-6 flex flex-col ">
        {project.galleryImages.map((src, i) => (
          <div
            key={i}
            className="parallax-wraper h-screen overflow-hidden relative"
          >
            <Image
              className="parallax-img absolute -top-50 object-cover w-full h-[170%] will-change-transform"
              src={src}
              width={1920}
              height={1080}
              loading="eager"
              quality={75}
              alt={`${project.title} ${i + 1}`}
            />
          </div>
        ))}
      </section>
      <section
        id="testimonials"
        className="w-screen h-full border-b border-white/9 bg-[#121111] px-4 sm:px-8 py-5 z-5 relative"
      >
        <span
          id="testimonials-span"
          className="text-orange-700 absolute w-fit h-fit z-9001"
        >
          {"// More Projects"}
        </span>
        <div className="w-full min-h-screen flex flex-wrap md:flex-nowrap gap-6 ">
          {projects.map((mp, i) => {
            if (mp.slug == path) return null;
            return (
              <div key={i} className="flex flex-col gap-3">
                <Link
                  href={`/projects/${mp.slug}`}
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
                  <p className="text-body sm:text-title font-bold">
                    {mp.title}
                  </p>
                  <p className="text-body">({mp.year})</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
export default ProjectPage;
