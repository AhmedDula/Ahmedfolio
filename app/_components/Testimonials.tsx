"use client";
import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

function Testimonials() {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#testimonials-content",
      pin: "#testimonials-span",
      pinSpacing: false,
    });
    const testimonialsSplit = SplitText.create("#testimonials-quote", {
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
        trigger: "#testimonials-quote",
        start: "top-=30% center",
        end: "50% center",
        scrub: 1,
      },
    });
  }, []);
  return (
    <section
      id="testimonials"
      className="w-full h-screen border-b border-white/9 bg-[#121111] px-4 sm:px-8 py-5 relative z-2 overflow-hidden"
    >
     
      <h2
        id="testimonials-span"
        className="text-orange-700 absolute w-fit h-fit z-9001"
      >
        {"// Testimonials"}
      </h2>

      <div
        id="testimonials-content"
        className="w-full h-[90%] py-40 flex flex-col gap-3 items-end justify-center-safe"
      >
        <div className="sm:w-[80%] flex items-center-safe sm:justify-between">
          <blockquote
            id="testimonials-quote"
            className="text-[5vw] md:text-[3.4vw] font-bold w-[80%] sm:w-[70%]"
          >
            “His keen eye for detail{" "}
            <span className="text-orange-700">
              and innovative approach impressed our team, turning challenges
              into creative solutions that set him apart.
            </span>
            ”
          </blockquote>

          <div className="w-fit border-3 border-orange-600/90 rounded-full overflow-hidden">
            <Image
              src="/ahmed-Photoroom.avif"
              width={600}
              height={500}
              alt=""
              className="size-15 sm:size-20 object-cover grayscale"
            />
          </div>
        </div>

        <div className="w-full sm:w-[80%]">
          <p className="font-semibold">{"// Ahmed Adel"}</p>

          <p className="opacity-55">CEO, Founder</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
