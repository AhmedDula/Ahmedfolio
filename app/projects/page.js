"use client";

import MobileNav from "./../_components/mobileNav";
import Nav from "./../_components/nav";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import Link from "next/link";
import { projects } from "../data/projects";
import { ScrollTrigger } from "gsap/all";

function Page() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger,SplitText);
    const work_sp =  SplitText.create("#work-index",{type:"chars"})
    gsap.from(work_sp.chars,{
      autoAlpha:0,
      y:100,
      duration:1.2,
     stagger:{
        each:.05,
        ease:"elastic",
        
      }
    })
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
     
      <section className="h-60 w-full  py-5">
        <div className="flex items-end h-full  ">
          <p id="work-index" className="text-hero font-bold font-mono bg-orange-600 w-full px-5">
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

     
    </main>
  );
}

export default Page;
