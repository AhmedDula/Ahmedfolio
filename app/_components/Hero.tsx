"use client";

import Link from "next/link";
import ScrollingText from "./scrollingtext";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
let heroIntroPlayed = false
function Hero() {
 useGSAP(() => {
    if (!heroIntroPlayed) {
      gsap
        .timeline({
          onComplete: () => {
            heroIntroPlayed = true;
          },
        })
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
    } else {
      // already played this session — just show the final state instantly
      gsap.set(["#hero-title", "#hero-footer", "#Nav"], { autoAlpha: 1 });
    }

    // parallax should keep re-running every time the section mounts
    gsap.to("#dula", {
      y: "-20%",
      ease: "none",
      scrollTrigger: { trigger: "#hero", scrub: true },
    });
  });
  return (
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
            className="link hover:text-cyan-700"
          >
            Linkedin
          </Link>
          <Link
            href={"https://github.com/AhmedDula"}
            data-title="GitHub"
            className="link hover:text-cyan-700"
          >
            GitHub
          </Link>
          <Link
            href={"https://www.instagram.com/jr.ahmd/"}
            data-title="Instagram"
            className="link hover:text-cyan-700"
          >
            Instagram
          </Link>
        </div>
        <div className="text-[5vw] sm:text-[3vw]">
          <p className="font-semibold ">{"// Web Developer"}</p>
          <p className="font-semibold pl-4 sm:pl-12">Art Designer</p>
        </div>
      </div>
      <Image
        id="dula"
        src={"/ahmed-Photoroom.avif"}
        className="object-cover sm:object-contain w-full top-30 grayscale h-[110%] absolute z-0  "
        width={1200}
        height={1080}
        loading="eager"
        quality={75}
        preload
        alt="Ahmed Portfolio Hero"
        aria-hidden="true"
      />
    </section>
  );
}

export default Hero;
