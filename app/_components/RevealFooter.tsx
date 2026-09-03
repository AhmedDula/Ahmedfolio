"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { LiaLinkedin } from "react-icons/lia";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/all";

export default function RevealFooter() {
  const pathName = usePathname();
  useGSAP(
    () => {
      if (pathName === "/projects" || pathName ===  "/contacts" ) return;
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#spacer",
          scrub: true,
          start: "top bottom",
          end: "+=100%",
          invalidateOnRefresh: true,
          // markers: true,
        },
      });

      tl.to("#footer", {
        autoAlpha: 1,
      }).from(
      "#footer-img",
      {
        scale: 1.1,
        opacity: 0,
      },
      "<",
    ).from(
        "#footer",
        {
          backgroundColor: "black",
        },
        "<",
      );;
    },
    { dependencies: [pathName], revertOnUpdate: true },
  );
  if(pathName === "/contacts") return null

  return (

    <>
    <footer
      id="footer"
      className="fixed bottom-0 left-0 invisible z-1 w-full h-screen overflow-hidden bg-[#e0e0e0] text-white/90 flex items-center justify-end flex-col"
    >
      {" "}
      <div
        id="footer-content"
        className="w-full flex justify-between h-50 sm:h-40 px-4 sm:px-8 items-baseline mix-blend-difference z-10"
      >
        {" "}
        <div className="flex flex-col gap-4">
          {" "}
          <div className="flex flex-col gap-2">
            {" "}
            <a
              href="mailto:ahmedadeldiv@gmail.com"
              className="link hover:text-cyan-700"
            >
              {" "}
              <span className="hidden sm:block">
                {" "}
                Mail: ahmedadeldiv@gmai.com{" "}
              </span>{" "}
              <CiMail size={25} className="sm:hidden" />{" "}
            </a>{" "}
            <a href="tel:+201090324648" className="link hover:text-cyan-700">
              {" "}
              <span className="hidden sm:block">Phone: +201090324648</span>{" "}
              <BiPhone size={25} className="sm:hidden" />{" "}
            </a>{" "}
          </div>{" "}
          <div className="flex gap-5 justify-between">
            {" "}
            <Link
              href="https://www.linkedin.com/in/ahmed-adel-said/"
              className="link hover:text-cyan-700"
            >
              {" "}
              <span className="hidden sm:block">LinkedIn</span>{" "}
              <LiaLinkedin size={30} className="sm:hidden" />{" "}
            </Link>{" "}
            <Link
              href="https://github.com/AhmedDula"
              className="link hover:text-cyan-700"
            >
              {" "}
              <span className="hidden sm:block">GitHub</span>{" "}
              <BsGithub size={25} className="sm:hidden" />{" "}
            </Link>{" "}
            <Link
              href="https://www.instagram.com/jr.ahmd/"
              className="link hover:text-cyan-700"
            >
              {" "}
              <span className="hidden sm:block">Instagram</span>{" "}
              <BsInstagram size={25} className="sm:hidden" />{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
        <div>
          {" "}
          <p className="font-semibold sm:text-6xl">
            {"// Web Developer"}
          </p>{" "}
          <p className="font-semibold sm:text-6xl pl-4 sm:pl-12">
            {" "}
            Art Designer{" "}
          </p>{" "}
        </div>{" "}
      </div>
      <Image
        id="footer-img"
        src="/ahmed-Photoroom.avif"
        className="object-cover sm:object-contain grayscale w-full h-[120%] top-10 absolute -z-1"
        width={1200}
        height={1080}
        quality={75}
        alt="footer-img"
      />
    </footer>
    
       
    <div id="spacer" className="h-screen -z-11 relative" aria-hidden="true"></div>
  
</>
     
  );
  
}
