import MobileNav from "./../_components/mobileNav";
import Nav from "./../_components/nav";
import Image from "next/image";
import Link from "next/link";

function Page() {
  return (
    <main className="overflow-hidden bg-background relative z-2">
      <section id="hero-about" className="min-h-screen w-screen  ">
        <div className="w-full mb-20">
          <p className="text-title md:text-hero font-semibold w-full px-4 sm:px-10 pt-30 sm:pt-60 leading-none whitespace-pre-wrap wrap-break-word ">
            {"                  "}I’m a creative developer building digital
            experiences at the intersection of code, design, and motion. I turn
            ideas into interactive, expressive, and purposeful products —
            combining modern web technologies with a strong focus on visual
            detail and user experience.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row  justify-around items-end w-full text-white/50 mb-40 gap-5 px-4 sm:px-10">
          <p className="text-body w-100 h-60">
            My work spans the full stack, from crafting immersive interfaces
            with React, Next.js, TypeScript, and GSAP to building the systems
            and APIs that power them with Node.js and MongoDB. I enjoy taking an
            idea beyond simply making it work and shaping how it feels, moves,
            and responds.
          </p>
          <p className="text-body w-100 h-60">
            I’m driven by curiosity and a constant desire to experiment. Whether
            I’m exploring a new interaction, refining a transition, or
            architecting a complete application, I care about the details that
            turn a functional website into an experience. My goal is simple:
            build digital products that feel intentional, distinctive, and
            memorable.
          </p>
          <Link
            href="/contacts"
            className="w-40 h-12 p-4 rounded-2xl border text-center hover:text-orange-600"
          >
            {" "}
            Lets Talk
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Page;
