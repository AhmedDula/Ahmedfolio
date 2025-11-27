"use client";

import Link from "next/link";
import gsap from "gsap";
import { useRef } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const underlineRef = useRef<HTMLSpanElement | null>(null);

  const handleEnter = () => {
    if (!underlineRef.current) return;
    gsap.to(underlineRef.current, {
      scaleX: 1,
      transformOrigin: "left center",
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    if (!underlineRef.current) return;
    gsap.to(underlineRef.current, {
      scaleX: 0,
      transformOrigin: "right center",
      duration: 0.4,
      ease: "power3.inOut",
    });
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative inline-block"
    >
      <Link href={href} className="flex justify-baseline items-center">{children}</Link>

      <span
        ref={underlineRef}
        className="absolute -bottom-1.5 left-0 h-px w-full bg-white scale-x-0"
      />
    </div>
  );
}
