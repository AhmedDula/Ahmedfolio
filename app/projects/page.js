"use client";

import MobileNav from "./../_components/mobileNav";
import Nav from "./../_components/nav";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import Link from "next/link";
import { projects } from "../data/projects";
import { ScrollTrigger } from "gsap/all";

function Page() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

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
    <main className="overflow-hidden bg-background relative z-2">
      <nav
        id="Nav"
        className="z-300 relative w-full  overflow-visible h-16 text-white mix-blend-difference "
      >
        <Nav />
        <MobileNav />
      </nav>
      <section className="h-60 w-full  py-5">
        <div className="flex items-end h-full  ">
          <p className="text-hero font-bold font-mono bg-orange-600 w-full px-5">
            Work Index
          </p>
        </div>
      </section>
      <section id="HR" className="w-full overflow-hidden h-fit ">
        <div id="container" className="flex w-fit h-screen">
          {projects.map((p, i) => (
            <Link
              href={`/projects/${p.slug}`}
              key={i}
              className={`slide h-screen w-screen p-5 rounded-3xl gap-2 flex flex-col md:flex-row will-change-transform`}
            >
              <div className=" md:w-[70%]  rounded-2xl border border-white/10 h-full overflow-hidden">
                <Image
                  src={p.coverImage}
                  width={1920}
                  height={1080}
                  quality={75}
                  priority
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className=" md:w-[30%]  rounded-2xl border border-white/10 h-full flex flex-col justify-between p-6">
                <div className="flex flex-col gap-5">
                  <span>( 2030 )</span>
                  <h2 className="text-3xl font-bold">{p.title} </h2>
                  <p className="text-sm">{p.overview}</p>
                </div>
                <div>
                  <h3 className=" py-2 border-b border-white/20">
                    Landing Page
                  </h3>
                  <h3 className=" py-2 border-b border-white/20">Responsive</h3>
                  <h3 className=" py-2 border-b border-white/20">Motions</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="testimonials"
        className="w-full h-fit border-b border-white/9 bg-[#121111] px-4 sm:px-8 py-5 z-1 relative overflow-hidden"
      >
        <span
          id="testimonials-span"
          className="text-orange-700 absolute w-fit h-fit z-9001"
        >
          {"// More Projects"}
        </span>
        <div className="w-full min-h-screen flex flex-wrap md:flex-nowrap gap-6 ">
          <div className="flex flex-col gap-3">
            <div className="w-full h-[90%] border border-white/20 rounded-2xl overflow-hidden">
              <Image
                src="/ciel.jpg"
                width={1920}
                height={1080}
                quality={75}
                loading="eager"
                alt="ahmed"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[20%] border border-white/20 rounded-2xl px-5 py-10 sm:py-2 flex flex-col justify-center">
              <p className="text-body sm:text-title font-bold"></p>
              <p className="text-body"></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
