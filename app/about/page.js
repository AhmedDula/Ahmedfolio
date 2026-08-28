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
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#footer",
        pin: true,
        scrub: true,
        start: "bottom bottom",
        end: "+=100%",
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
      <section id="hero-about" className="min-h-screen w-full  ">
        <div className="w-full mb-20">
          <p className="text-title md:text-hero font-semibold w-full px-4 sm:px-10 pt-30 sm:pt-60 leading-none whitespace-pre-wrap wrap-break-word ">
            {"                  "}I’m a designer and art director with
            over 3 years of experience turning ideas into brands and products. I
            work closely with founders, marketing teams, and developers to
            create visual systems that scale — from brand strategy to
            launch-ready interfaces.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row  justify-around items-end w-full text-white/50 mb-40 gap-5 px-4 sm:px-10">
          <p className="text-body w-100 h-60">
            I got my start in 2018, freelancing for early-stage startups while
            finishing design school. My first big break came working with Dapper
            Labs during the early Web3 wave — helping shape the look and feel of
            their product launches. Since then, I’ve collaborated with teams at
            Polygon, Showtime, and smaller venture-backed startups across LA,
            London, and Tel Aviv.
          </p>
          <p className="text-body w-100 h-60">
            Most of my work sits at the intersection of branding and product.
            Whether it’s designing pitch decks that raise funding or interfaces
            that ship, I partner closely with founders and developers to bring
            bold ideas to life — fast and with intention.
          </p>
          <Link href='/contacts' className="w-40 h-12 p-4 rounded-2xl border text-center hover:text-orange-600"> Lets Talk</Link>
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
          width={2000}
          height={1200}
          quality={75}
          alt="footer-img"
        />
      </section>
    </main>
  );
}

export default Page;
