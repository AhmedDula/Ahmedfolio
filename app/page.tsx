"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Draggable, Observer, ScrollToPlugin } from "gsap/all";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";

import Link from "next/link";
import ScrollingText from "./_components/scrollingtext";
import ProjectsStack from './_components/stacking-projects'
import { projects } from "./data/projects";
import ServiceSection from "./_components/ServiceSection"


export default function Home() {
  // Plugins
  gsap.registerPlugin(
    useGSAP,
    ScrollTrigger,
    ScrollSmoother,
    ScrollToPlugin,
    SplitText,
    Draggable,
    Observer,
  );
  // UseGSAP
  useGSAP(() => {
    gsap
      .timeline()
      .from("#hero-title", {
        autoAlpha: 0,
        duration: 1.2,
        scale: -0.7,
        xPercent: 100,
      })
      .from(
        "#hero-footer",
        {
          autoAlpha: 0,
          duration: 1,
          scale: 1.01,
        },
        "<80%",
      )
      .from(
        "#Nav",
        {
          autoAlpha: 0,
          duration: 1,
          scale: 1.01,
        },
        "<",
      );
    gsap.to("#dula", {
      y: "-20%",
      ease: "none",
      scrollTrigger: { trigger: "#hero", scrub: true },
    });
    // -------Hero-------

    // iNTRO Animations
   
    const introSp = SplitText.create("#intro-h1", {
      type: "chars",
      smartWrap: true,
    });

    gsap.set(introSp.chars, {
      opacity: 0.4,
      force3D: true,
      willChange: "opacity",
    });
    ScrollTrigger.refresh();

    gsap.to(introSp.chars, {
      opacity: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#intro-h1",
        start: "top-=30% center",
        end: "50% center",
        scrub: 1,
      },
    });

    // -------Intro------

    // Services Animations

    // ------Services-------

    // projects Animation

    // ------Projects------

    // Testimonials Animations
    ScrollTrigger.create({
      trigger: "#testimonials-content",
      pin: "#testimonials-span",
      pinSpacing: false,
    });
    const testimonialsSplit = SplitText.create("#testimonials-h2", {
      type: "chars",
      smartWrap: true,
    });
    gsap.set(testimonialsSplit.chars, {
      opacity: 0.4,
      force3D: true,
      willChange: "opacity",
    });
    ScrollTrigger.refresh();
    gsap.to(testimonialsSplit.chars, {
      opacity: 1,
      stagger: {
        each: 0.3,
      },
      scrollTrigger: {
        trigger: "#testimonials-h2",
        start: "top-=30% center",
        end: "50% center",
        scrub: 1,
      },
    });
    // ------Testimonials------
  });

  return (
    <main className=" overflow-x-clip bg-background relative z-2 ">
     
      <section
        id="hero"
        className="relative  overflow-hidden w-screen h-screen bg-[#e0e0e0]  flex items-center justify-end flex-col  "
      >
        <div
          id="hero-title"
          className="absolute top-[33%] left-0 z-20 mix-blend-difference text-white"
        >
          <ScrollingText />
        </div>
        <div
          id="hero-footer"
          className="w-full flex justify-between h-50 sm:h-40 px-4 sm:px-8 items-baseline z-10 text-white mix-blend-difference"
        >
          <div id="links" className="flex flex-col justify-between">
            <Link
              href={"https://www.linkedin.com/in/ahmed-adel-said/"}
              data-title="Linkedin"
              className="link hover:cursor-none"
            >
              Linkedin
            </Link>
            <Link
              href={"https://github.com/AhmedDula"}
              data-title="GitHub"
              className="link hover:cursor-none"
            >
              GitHub
            </Link>
            <Link
              href={"https://www.instagram.com/jr.ahmd/"}
              data-title="Instagram"
              className="link hover:cursor-none"
            >
              Instagram
            </Link>
          </div>
          <div className="text-[5vw] sm:text-[3vw]">
            <h1 className="font-semibold ">{"// Web Developer"}</h1>
            <h1 className="font-semibold pl-4 sm:pl-12">Art Designer</h1>
          </div>
        </div>
        <Image
          id="dula"
          src={"/ahmed-Photoroom.png"}
          className="object-cover sm:object-contain w-full top-30 grayscale h-[110%] absolute z-0 block "
          width={1920}
          height={1080}
          loading="eager"
          quality={75}
          priority
          alt="Ahmed Portfolio Hero"
          aria-hidden="true"
        />
      </section>
      <section
        id="intro"
        className=" sm:px-8 px-4 py-5 sm:py-2 w-full h-[90vh] border-b border-white/9  relative"
      >
          <span
            id="intro-span"
            className="sticky top-0 left-0 text-orange-700 w-fit h-fit whitespace-nowrap z-90"
          >
            {"// intro"}
          </span>
        <div
          id="intro-content"
          className="relative h-full flex flex-col justify-center-safe items-center gap-9 overflow-hidden "
        >
          <h2
            id="intro-h1"
            className="sm:text-[3vw] font-bold sm:w-[80%] py-10 text-center"
          >
            I’m a versatile{" "}
            <span className="text-orange-700">
              developer & designer who partners to turn ideas into real
              products.
            </span>{" "}
            I focus on clear interfaces, sharp decisions, and fast execution.
          </h2>
          <div className="w-full flex flex-col gap-6 items-end-safe sm:px-20">
            <div className="flex flex-col sm:w-[50%] gap-7 items-center sm:items-start">
              <p className=" opacity-55 w-[70%] text-sm md:text-[1.2vw]">
                Bringing your vision to life quickly and efficiently—whether
                it&apos;s branding, apps, or websites—I&apos;ve got it covered,
                delivering smooth and effective solutions from start to finish.
              </p>
              <div
                id="intro-link"
                className="relative  py-2 w-45 sm:py-4 hover:text-black/90 text-white/60 border border-white/20 text-center rounded-full overflow-hidden"
              >
                <div
                  id="intro-works"
                  className="absolute size-40 -bottom-9 left-[5%] scale-0  -z-1 rounded-full text-center bg-orange-700 "
                />
                See my Works
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceSection/>
      

      <ProjectsStack projects={projects}/>
      <section
        id="testimonials"
        className="w-full h-screen border-b border-white/9 bg-[#121111] px-4 sm:px-8 py-5 relative z-2 overflow-hidden"
      >
        <span
          id="testimonials-span"
          className="text-orange-700 absolute w-fit h-fit z-9001"
        >
          {"// Testimonials"}
        </span>
        <div
          id="testimonials-content"
          className="w-full h-[90%] py-40 flex flex-col gap-3 items-end justify-center-safe"
        >
          <div className="sm:w-[80%] flex items-center-safe sm:justify-between">
            <h2
              id="testimonials-h2"
              className="text-[5vw] md:text-[3.4vw] font-bold w-[80%] sm:w-[70%] "
            >
              “His keen eye for detail{" "}
              <span className=" text-orange-700">
                and innovative approach impressed our team, turning challenge
                creative solutions that set him apart.”{" "}
              </span>
            </h2>

            <div className="w-fit border-3 border-orange-600/90  rounded-full overflow-hidden ">
              <Image
                src={"/ahmed-Photoroom.png"}
                width={600}
                height={500}
                alt=""
                className="size-15 sm:size-20 object-cover  grayscale "
              />
            </div>
          </div>
          <div className="w-full sm:w-[80%]">
            <p className="font-semibold">{"// Ahmed Adel"}</p>
            <p className="opacity-55">CEO, Founder</p>
          </div>
        </div>
      </section>
    </main>
  );
}
