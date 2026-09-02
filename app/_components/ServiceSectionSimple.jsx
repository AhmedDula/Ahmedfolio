"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const SERVICES = [
  {
    number: "01",
    title: "Branding & Marketing",
    description:
      "Branding that builds trust and drives loyalty through clear visuals and messaging. into an unforgettable online experience.",
    items: [
      "Brand Strategy and Messaging",
      "Logo Design",
      "Visual Identity",
      "Brand Guidelines & Frameworks",
      "Marketing materials",
      "Motion Design",
    ],
  },
  {
    number: "02",
    title: "Website Design",
    description:
      "Not just about aesthetics, but about developing logical, scalable design systems that are precisely tailored to the web and app application.",
    items: [
      "Landing Pages",
      "Blogs",
      "E-commerce",
      "Complex Websites",
      "Corporate Websites",
      "3D Web Design",
    ],
  },
  {
    number: "03",
    title: "Web Development",
    description:
      "User-focused app design that maximizes usability and encourages retention.",
    items: [
      "Framer, Webflow, or WordPress Builds",
      "CMS Integration",
      "SEO Optimization",
      "Site Migrations",
      "Marketing materials",
      "Motion Design",
    ],
  },
];
function DigitStrip({ stripRef }) {
  return (
    <div className="relative h-[1em] overflow-hidden">
      {" "}
      <div
        ref={stripRef}
        className="flex flex-col will-change-transform"
        style={{ backfaceVisibility: "hidden" }}
      >
        {" "}
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className="block h-[1em] leading-[1em]">
            {" "}
            {i}{" "}
          </span>
        ))}{" "}
      </div>{" "}
    </div>
  );
}
export default function ServiceSection() {
  const sectionRefs = useRef([]);
  const tensRef = useRef(null);
  const unitsRef = useRef(null);
  const activeIndex = useRef(-1);
  useGSAP(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const goTo = (index, instant = false) => {
      if (activeIndex.current === index) return;

      activeIndex.current = index;

      const [tens, units] = SERVICES[index].number.split("").map(Number);

      const duration = instant || reduceMotion ? 0 : 0.7;

      gsap.to(tensRef.current, {
        yPercent: -tens * 10,
        duration,
        ease: "power4.inOut",
        overwrite: true,
      });

      gsap.to(unitsRef.current, {
        yPercent: -units * 10,
        duration,
        delay: instant ? 0 : 0.04,
        ease: "power4.inOut",
        overwrite: true,
      });
    };

    goTo(0, true);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      sectionRefs.current.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => goTo(index),
          onEnterBack: () => goTo(index),
        });
      });
    });

    return () => mm.revert();
  });
  return (
    <section className="relative">
      {" "}
      <div className="flex">
        {" "}
        <div
          id="service-pin"
          style={{ WebkitTextStroke: "3px #fff" }}
          className="hidden text-center w-[40%] md:flex flex-col sticky top-0 h-fit"
        >
          {" "}
          <div className="relative h-1/3">
            {" "}
            <h1
              className="text-[13vw] text-transparent flex justify-center leading-none"
              style={{ perspective: 600 }}
              aria-hidden="true"
            >
              {" "}
              <DigitStrip stripRef={tensRef} />{" "}
              <DigitStrip stripRef={unitsRef} />{" "}
            </h1>{" "}
          </div>{" "}
        </div>
        <div className="h-fit md:w-[60%] flex flex-col gap-10 md:gap-70 py-10 sm:pt-50">
          {SERVICES.map((service, i) => (
            <div
              key={service.number}
              ref={(el) => (sectionRefs.current[i] = el)}
              className="flex flex-col justify-start gap-5 md:gap-20"
            >
              <div className="flex flex-col">
                <h2 className="sm:text-[3.5vw] font-bold">{service.title}</h2>

                <p className="sm:w-2/3 text-sm sm:text-[.9vw] sm:px-3 opacity-55">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-col">
                {service.items.map((item, j) => (
                  <div
                    key={item}
                    className={`flex justify-between items-center px-3 h-13 ${
                      j === 0
                        ? "border-y border-white/16"
                        : "border-b border-white/16"
                    }`}
                  >
                    <h3>{item}</h3>
                    {String(j + 1).padStart(2, "0")}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
