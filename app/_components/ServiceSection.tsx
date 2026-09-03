"use client";

import { useRef, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type Service = {
  number: string;
  title: string;
  description: string;
  items: string[];
};

type DigitStripProps = {
  stripRef: RefObject<HTMLDivElement | null>;
  maxDigit: number;
};

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Web Development",
    description:
      "I build modern, responsive, and high-performance websites and web applications focused on usability, speed, and scalability.",
    items: [
      "Next.js",
      "React",
      "Responsive Web Design",
      "Performance Optimization",
    ],
  },
  {
    number: "02",
    title: "Full-Stack Development",
    description:
      "I develop complete web applications with reliable backends, APIs, databases, authentication, and seamless frontend experiences.",
    items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication"],
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "I design clean and intuitive digital interfaces that balance visual identity, usability, accessibility, and user experience.",
    items: ["Interface Design", "UX Design", "Design Systems", "Prototyping"],
  },
  {
    number: "04",
    title: "Creative Development",
    description:
      "I create interactive digital experiences using animation and motion to make interfaces feel engaging without sacrificing performance.",
    items: [
      "GSAP",
      "Scroll Animations",
      "Micro Interactions",
      "Interactive Experiences",
    ],
  },
];

function DigitStrip({ stripRef, maxDigit }: DigitStripProps) {
  const digits = Array.from({ length: maxDigit + 1 }, (_, i) => i);

  return (
    <div className="relative h-[1em] overflow-hidden">
      <div
        ref={stripRef}
        className="flex flex-col will-change-transform"
        style={{
          backfaceVisibility: "hidden",
        }}
      >
        {digits.map((digit) => (
          <span
            key={digit}
            className="block"
            style={{ height: "1em", lineHeight: "1em" }}
          >
            {digit}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ServiceSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const tensRef = useRef<HTMLDivElement | null>(null);
  const unitsRef = useRef<HTMLDivElement | null>(null);
  const activeIndexRef = useRef(-1);

  // Calculate max digits needed
  const maxTens = Math.max(
    ...SERVICES.map((s) => Number.parseInt(s.number[0], 10)),
  );
  const maxUnits = Math.max(
    ...SERVICES.map((s) => Number.parseInt(s.number[1], 10)),
  );

  useGSAP(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    gsap.set(tensRef.current, {
      y: "0em",
    });
    gsap.set(unitsRef.current, {
      y: "-1em",
    });

    activeIndexRef.current = 0;

    const goTo = (index: number, instant = false) => {
      if (activeIndexRef.current === index) return;
      activeIndexRef.current = index;

      const numberStr = SERVICES[index].number;
      const tens = Number.parseInt(numberStr[0], 10);
      const units = Number.parseInt(numberStr[1], 10);

      const duration = instant || reduceMotion ? 0 : 0.5;

      if (!tensRef.current || !unitsRef.current) return;

      // Calculate the offset: each digit is 1em tall
      const tensOffset = -tens + "em";
      const unitsOffset = -units + "em";

      gsap.to(tensRef.current, {
        y: tensOffset,
        duration,
        ease: "power3.inOut",
        overwrite: "auto",
      });

      gsap.to(unitsRef.current, {
        y: unitsOffset,
        duration,
        ease: "power3.inOut",
        overwrite: "auto",
        delay: instant ? 0 : 0.02,
      });
    };

    // Initialize with first service (no need to call goTo since we set initial position)
    // But we need to set active index
    activeIndexRef.current = 0;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const triggers = sectionRefs.current.map((el, i) => {
        if (!el) return null;
        return ScrollTrigger.create({
          trigger: el,
          start: "top+=20% center",
          end: "bottom+=50% center",

          onEnter: () => goTo(i),
          onEnterBack: () => goTo(i),
        });
      });

      return () => triggers.forEach((t) => t && t.kill());
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="service"
      className="w-full h-fit border-b border-white/9 px-4 sm:px-8 py-5"
      ref={containerRef}
    >
      <div
        id="service-content"
        className="relative w-full h-full flex flex-col sm:flex-row gap-2"
      >
        <span
          id="service-span"
          className="text-orange-700 sticky top-0 text-body h-fit z-91 whitespace-nowrap"
        >
          {"// service"}
        </span>

        <div
          id="service-pin"
          style={{ WebkitTextStroke: "3px #fff" }}
          className="hidden text-center w-1/3 md:flex flex-col sticky top-10 h-fit"
        >
          <div id="service-1-number" className="relative h-1/3">
            <div
              id="span-01"
              className="text-[25vw] text-transparent flex justify-center leading-none"
              style={{ perspective: 600 }}
              aria-hidden="true"
            >
              <DigitStrip stripRef={tensRef} maxDigit={maxTens} />
              <DigitStrip stripRef={unitsRef} maxDigit={maxUnits} />
            </div>
          </div>
        </div>

        <div
          id="right-side"
          className="h-fit w-full flex flex-col gap-6 md:gap-50 md:pt-50"
        >
          {SERVICES.map((service, i) => (
            <div
              key={service.number}
              id={`service-${i + 1}`}
              ref={(el: HTMLDivElement | null) => {
                sectionRefs.current[i] = el;
              }}
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
                    <span>{String(j + 1).padStart(2, "0")}</span>
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
