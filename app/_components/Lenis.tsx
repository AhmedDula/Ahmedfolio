"use client";
import { useEffect, useRef } from "react"; import { usePathname } from "next/navigation"; import Lenis from "lenis"; import gsap from "gsap"; import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function SmoothScroll() { const lenisRef = useRef<Lenis | null>(null); const pathname = usePathname();
useEffect(() => { const lenis = new Lenis({ autoRaf: false, duration: 1.7, smoothWheel: true,syncTouchLerp:1  });
lenisRef.current = lenis;

lenis.on("scroll", ScrollTrigger.update);

const raf = (time: number) => {
  lenis.raf(time * 1000);
};

gsap.ticker.add(raf);
gsap.ticker.lagSmoothing(0);

return () => {
  gsap.ticker.remove(raf);
  lenis.destroy();
  lenisRef.current = null;
};
}, []);
useEffect(() => { lenisRef.current?.scrollTo(0, { immediate: true }); ScrollTrigger.refresh(); }, [pathname]);
return null; }