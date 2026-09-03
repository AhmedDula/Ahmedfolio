import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Ahmed Adel, a Full-Stack Developer & Designer focused on building modern, high-performance web experiences.",
  alternates: {
    canonical: "/about",
  },
};
import Link from "next/link";

function Page() {
  return (
    <main className="overflow-hidden bg-background relative z-2">
      <section id="hero-about" className="min-h-screen w-screen">
        <div className="w-full mb-20">
          <h1 className="text-title md:text-hero sm:indent-100 font-semibold w-full px-4 sm:px-10 pt-30 sm:pt-60 leading-none whitespace-pre-wrap wrap-break-word">
            I’m a{" "}
            <span className="text-orange-700 whitespace-nowrap">
              creative developer
            </span>{" "}
            building digital experiences at the intersection of code, design,
            and motion. I turn ideas into interactive, expressive, and
            purposeful products — combining modern web technologies with a
            strong focus on visual detail and user experience.
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row justify-around items-end w-full text-white/50 mb-40 gap-5 px-4 sm:px-10">
          <div className="text-body w-full h-60">
            <h2 className="sr-only">About Ahmed Adel</h2>
            <p>
              My work spans the full stack, from crafting immersive interfaces
              with React, Next.js, TypeScript, and GSAP to building the systems
              and APIs that power them with Node.js and MongoDB. I enjoy taking
              an idea beyond simply making it work and shaping how it feels,
              moves, and responds.
            </p>
          </div>

          <div className="text-body w-full h-60">
            <p>
              I’m driven by curiosity and a constant desire to experiment.
              Whether I’m exploring a new interaction, refining a transition, or
              architecting a complete application, I care about the details that
              turn a functional website into an experience. My goal is simple:
              build digital products that feel intentional, distinctive, and
              memorable.
            </p>
          </div>

          <Link
            href="/contacts"
            className="w-1/2 p-3 rounded-2xl border border-white/18 duration-300 text-center font-bold hover:text-orange-700 hover:bg-white/80"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Page;
