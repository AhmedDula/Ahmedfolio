"use client";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import Link from "next/link";

function Intro() {
  useGSAP(() => {
    const introSp = SplitText.create("#intro-title", {
      type: "chars",
      smartWrap: true,
    });

    gsap.set(introSp.chars, {
      opacity: 0.4,
      force3D: true,
      willChange: "opacity",
    });
   

    gsap.to(introSp.chars, {
      opacity: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#intro-content",
        start: "top center",
        end: "50% center",
        scrub: 1,
        
      },
    });
  });
  return (
    <section
      id="intro"
      className=" sm:px-8 px-4 py-5 sm:py-2 w-full border-b border-white/9  relative"
    >
      <span
        id="intro-span"
        className="sticky top-0 left-0 text-lead text-orange-700 w-fit h-fit whitespace-nowrap z-90"
      >
        {"// intro"}
      </span>
      <div
        id="intro-content"
        className="relative h-full flex flex-col justify-center-safe items-center gap-9 overflow-hidden mb-20"
      >
        <h2
          id="intro-title"
          className="text-lead lg:text-title font-bold sm:w-[80%] py-10 text-center"
        >
          I’m a Full-Stack Developer & Designer who turns ideas into {" "}
          <span className="text-orange-700">
            
             modern, high-performance digital products.
          </span>{" "}
          I focus on clear interfaces, scalable applications, and fast
          execution.
        </h2>

        <div className="w-full flex flex-col gap-6 items-end-safe sm:px-20">
          <div className="flex flex-col md:w-[70%] gap-7 items-center sm:items-start">
            <p className="w-[70%]  sm:w-[60%]  text-caption md:text-lead text-white/40">
              I build modern websites and web applications using React, Next.js,
              Node.js, and MongoDB, combining development, UI/UX, animation, and
              performance to create fast and engaging digital experiences.
            </p>

            <Link
              href="/projects"
              className="relative py-2 px-10 sm:py-4 font-bold hover:text-orange-700 hover:bg-white/80 duration-300 text-white/60 border border-white/20 text-center rounded-full overflow-hidden"
            >
              See my Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
