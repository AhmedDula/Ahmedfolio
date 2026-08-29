"use client";

import MobileNav from "./../_components/mobileNav";
import Nav from "./../_components/nav";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { CiMail } from "react-icons/ci";
import { LiaLinkedin } from "react-icons/lia";
import { BsGithub, BsInstagram } from "react-icons/bs";
import Link from "next/link";
import { BiPhone } from "react-icons/bi";
import { projects } from "../data/projects";
function Page() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const slides = gsap.utils.toArray(".slide");
    gsap.to(slides, {
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        pin: true,
        scrub: .7,
        // markers: true,
      },
      xPercent: -92 * (slides.length - 1),
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#footer",
        pin: true,
        scrub: true,
        start: "bottom bottom",
        end: "+=100%",
        // markers:true
      },
    });

    tl.from("#footer", {
      background: "black",
    }).from(
      "#footer-img",
      {
        scale: 1.1,
        opacity: 0,
      },
      "<",
    );
  });
  return (
    <main className="">
      <nav
        id="Nav"
        className="z-300 relative w-full  overflow-visible h-16 text-white mix-blend-difference "
      >
        <Nav />
        <MobileNav />
      </nav>
      <section className="h-60 w-full  py-5">
        <div className="flex items-end h-full  ">
          <p className="text-hero font-bold font-mono bg-orange-600 w-full px-5">
            Work Index
          </p>
        </div>
      </section>
      <section id="HR" className="w-full overflow-hidden">
        <div id="container" className="flex w-fit h-screen">
          {projects.map((p,i)=>(
            
          <Link href={`/projects/${p.slug}`} key={i} className={`slide h-screen w-[80vw] p-5 rounded-3xl gap-2 flex flex-col md:flex-row will-change-transform`} >
         
                     
                       
                          <div className=" md:w-[70%]  rounded-2xl border border-white/10 h-full overflow-hidden">
                            <Image
                              src={p.coverImage}
                              width={1920}
                              height={1080}
                              quality={75}
                              loading="eager"
                              alt={p.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className=" md:w-[30%]  rounded-2xl border border-white/10 h-full flex flex-col justify-between p-6">
                            <div className="flex flex-col gap-5">
                              <span>( 2030 )</span>
                              <h2 className="text-3xl font-bold">{p.title} </h2>
                              <p className="text-sm">
                               {p.overview}
                              </p>
                            </div>
                            <div>
                              <h3 className=" py-2 border-b border-white/20">
                                Landing Page
                              </h3>
                              <h3 className=" py-2 border-b border-white/20">Responsive</h3>
                              <h3 className=" py-2 border-b border-white/20">Motions</h3>
                            </div>
                          </div>
                    
                    
                      </Link>
          
          ))}
        
        </div>
      </section>
      <section
        id="testimonials"
        className="w-full h-full border-b border-white/9 bg-[#121111] px-4 sm:px-8 py-5 z-5 relative"
      >
        <span
          id="testimonials-span"
          className="text-orange-700 absolute w-fit h-fit z-9001"
        >
          {"// More Projects"}
        </span>
        <div className="w-full min-h-screen flex flex-wrap md:flex-nowrap gap-6 ">
          <div className="flex flex-col gap-3">
            <div className="w-full h-[90%] border border-white/20 rounded-2xl overflow-hidden">
              <Image
                src="/ciel.jpg"
                width={1920}
                height={1080}
                quality={75}
                loading="eager"
                alt="ahmed"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[20%] border border-white/20 rounded-2xl px-5 py-10 sm:py-2 flex flex-col justify-center">
              <p className="text-body sm:text-title font-bold"></p>
              <p className="text-body"></p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="footer"
        className="z-1 -mt-[100vh] will-change-transform relative overflow-hidden w-full h-screen bg-[#e0e0e0] text-white/90 flex items-center justify-end flex-col "
      >
        <div className="w-full flex justify-between h-50 sm:h-40 px-4 sm:px-8 items-baseline  mix-blend-difference">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col  gap-2 ">
              <a
                href="mailto:ahmedadeldiv@gmail.com"
                data-title="Mail"
                className="link hover:text-cyan-700"
              >
                <span className="hidden sm:block ">
                  Mail: ahmedadeldiv@gmai.com
                </span>
                <CiMail size={25} className="sm:hidden" />
              </a>
              <a
                href="tel:+201090324648"
                data-title="Phone"
                className="link hover:text-cyan-700 "
              >
                <span className="hidden sm:block">Phone: +201090324648</span>
                <BiPhone size={25} className="sm:hidden" />
              </a>
            </div>
            <div id="links-footer" className="flex gap-5 justify-between">
              <Link
                href={"https://www.linkedin.com/in/ahmed-adel-said/"}
                data-title="Linkedin"
                className="link hover:text-cyan-700"
              >
                <span className="hidden sm:block">LinkedIn</span>
                <LiaLinkedin size={30} className="sm:hidden" />
              </Link>
              <Link
                href={"https://github.com/AhmedDula"}
                data-title="GitHub"
                className="link hover:text-cyan-700"
              >
                <span className="hidden sm:block">GitHub</span>
                <BsGithub size={25} className="sm:hidden" />
              </Link>
              <Link
                href={"https://www.instagram.com/jr.ahmd/"}
                data-title="Instagram"
                className="link hover:text-cyan-700"
              >
                <span className="hidden sm:block">Instagram</span>
                <BsInstagram size={25} className="sm:hidden" />
              </Link>
            </div>
          </div>
          <div className="">
            <h1 className="font-semibold sm:text-6xl">{"// Web Developer"}</h1>
            <h1 className="font-semibold sm:text-6xl pl-4 sm:pl-12">
              Art Designer
            </h1>
          </div>
        </div>
        <Image
          id="footer-img"
          src={"/ahmed-Photoroom.png"}
          className="object-cover sm:object-contain grayscale w-full h-[120%] top-10 absolute -z-1"
          width={1920}
          placeholder="blur"
          blurDataURL="/ahmed-Photoroom.png"
          height={1080}
          quality={75}
          alt="footer-img"
        />
      </section>
    </main>
  );
}

export default Page;
