"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import Link from "next/link";
import { projects } from "../../data/projects";
import { ScrollTrigger } from "gsap/all";
import { FiArrowUpRight } from "react-icons/fi";
function ProjectPage() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const work_sp = SplitText.create("#work-index", { type: "chars" });
    gsap.from(work_sp.chars, {
      autoAlpha: 0,
      y: 100,
      duration: 1.2,
      stagger: {
        each: 0.05,
        ease: "elastic",
      },
    });
    const slides = gsap.utils.toArray(".slide");
    gsap.to(slides, {
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        end: "bottom+=1000 top",
        pin: true,
        scrub: 1,
      },

      xPercent: -100 * (slides.length - 1),
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#spacer",
        scrub: true,
        start: "top bottom",
        end: "+=100%",
        invalidateOnRefresh: true,
        // markers: true,
      },
    });

    tl.to("#footer", {
      autoAlpha: 1,
    })
      .from(
        "#footer-img",
        {
          scale: 1.2,
          opacity: 0,
        },
        "<",
      )
      .from(
        "#footer",
        {
          backgroundColor: "black",
        },
        "<",
      );
  });
  return (
    <main className="overflow-clip bg-background relative z-2">
      <header className="h-60 w-full py-5">
        <div className="flex items-end h-full">
          <h1
            id="work-index"
            className="text-hero font-bold font-mono bg-orange-600 w-full px-5"
          >
            Work Index
          </h1>
        </div>
      </header>

      <section
        id="HR"
        aria-labelledby="work-index"
        className="w-full overflow-hidden h-fit border-b border-white/18"
      >
        <div id="container" className="flex w-fit h-screen">
          {projects.map((p, i) => (
            <article
              key={i}
              className="slide h-screen w-screen p-5 rounded-3xl gap-2 flex flex-col md:flex-row will-change-transform"
            >
              <Link
                href={`/projects/${p.slug}`}
                aria-label={`View project: ${p.title}`}
                className="h-full w-full rounded-3xl gap-2 flex flex-col md:flex-row"
              >
                <div className="md:w-[70%] rounded-2xl border border-white/10 h-[60%] md:h-full overflow-hidden">
                  <Image
                    src={p.coverImage}
                    width={1200}
                    height={1080}
                    quality={75}
                    preload
                    alt={p.title}
                    className="w-full h-full object-cover object-[30%_40%]"
                  />
                </div>

                <div className="md:w-[30%] rounded-2xl border border-white/10 h-[50%] md:h-full flex flex-col justify-between p-4 sm:p-6 mb-10">
                  <div className="flex flex-col gap-1 md:gap-5">
                    <span aria-label={`${p.year} project`} className="font-mono">({p.year})</span>
                    <h2 className="text-lead font-bold">{p.title}</h2>
                    <p className="text-body">{p.overview}</p>
                  </div>

                  <ul className="text-body">
                     {p.keywords.map((key,i)=>
                    <li key={i} className="sm:py-2 border-b border-white/20">
                    {key}
                    </li>
                   )}
                  </ul>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className=" h-fit relative w-screen ">
        <h2
          id="more-projects-title"
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
                    <h3 className="text-white ">{p.title}</h3>
                    <p className="">({p.year})</p>
                  </div>
                  <p className="w-full whitespace-nowrap flex sm:justify-center">{p.category}</p>
                </div>
               <div className="w-1/3 flex justify-end ">
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
