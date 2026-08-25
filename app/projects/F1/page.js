"use client";
import React from "react";
import MobileNav from "../../_components/mobileNav";
import Nav from "../../_components/nav";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { CiMail } from "react-icons/ci";
import { LiaLinkedin } from "react-icons/lia";
import { BsGithub, BsInstagram } from "react-icons/bs";
import Link from "next/link";
import { BiPhone } from "react-icons/bi";
function Page() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".img", {
      scrollTrigger: {
        trigger: ".f",
        // markers:true,
        scrub: true,
        start: "top ",
        end: "center",
        pin: ".img",
        pinSpacing: false,
        // pinSpacer:false
      },

      opacity: 1,
      scale: 1.1,

      // yPercent:-100
    });

    gsap.to("#img_1", {
      yPercent: 30,
      ease: "none",

      scrollTrigger: {
        trigger: "#wraper_1",
        start: "top center",
        end: "bottom center",
        scrub: 0.5,
      },
    });
    gsap.to("#img_2", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: "#wraper_2",
        start: "top center",
        end: "bottom center",
        scrub: 0.5,
        // markers:true
      },
    });
    gsap.to("#img_3", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: "#wraper_3",
        start: "top center",
        end: "bottom center",
        scrub: 0.5,
        // markers:true
      },
    });
    ScrollTrigger.defaults({ pinType: "transform" });
    gsap.to("#testimonials", {
      yPercent: -100,
      ease: "none",

      scrollTrigger: {
        trigger: "#pin-sc",
        pin: true,
        scrub: true,
        // pinSpacing:false
      },
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#pin-sc",
          scrub: true,
          // pinSpacing:false
        },
      })
      .from("#footer", {
        delay: 0.2,
        autoAlpha: 0.2,
      })
      .to(
        "#silver",
        {
          yPercent: -10,
        },
        "<",
      );
  });
  return (
    <main className="">
      <nav
        id="Nav"
        className="z-300 relative w-full  overflow-visible h-fit text-white mix-blend-difference "
      >
        <Nav />
        <MobileNav />
      </nav>
      <section className="f min-h-screen ">
        <div className="  h-screen max-w-screen overflow-hidden ">
          <Image
            src={
              "https://images.pexels.com/photos/10620483/pexels-photo-10620483.jpeg"
            }
            width={1920}
            height={1080}
            quality={75}
            unoptimized
            alt=""
            className="img w-full h-full object-cover opacity-0"
          />
        </div>
        <div className="e w-full h-screen flex sm:flex-row flex-col  sm:gap-3 ">
          <p className="w-full  text-title sm:text-hero text-center font-bold">
            Fringe Sports
          </p>
          <p className="w-full h-full  text-title leading-none px-5 sm:px-1">
           <span className="text-orange-600 text-body">{`// Overview`}</span> <br></br>
            For Fringe Sports, we broke away from the typical sports
            advertising mold. Instead of the usual high-energy, competitive
            narrative, we highlighted the quirky side of lesser-known sports,
            celebrating the fun and unpredictability that make them unique.
          </p>
        </div>

        {/* <div className='  h-full  grid place-items-center text-9xl bg-red-200'><h1>Ahmed Adel</h1></div> */}
      </section>
      <section className="min-h-screen w-full border-b-red-500 gap-6 flex flex-col ">
        <div id="wraper_1" className="  h-screen   overflow-hidden relative  ">
          <Image
            id="img_1"
            className="absolute -top-100 object-cover w-full h-[170%] will-change-transform"
            src={
              "https://blanckaeg.com/cdn/shop/files/DSC04495.jpg?v=1779395663&width=2400"
            }
            width={2000}
            height={1890}
            alt=""
          ></Image>
        </div>

        <div id="wraper_2" className="  h-screen   overflow-hidden relative ">
          <Image
            id="img_2"
            className=" absolute -top-50  object-cover w-full h-[170%] will-change-transform"
            src={
              "https://blanckaeg.com/cdn/shop/files/DSC01111.jpg?v=1784789308&width=2400"
            }
            width={2000}
            height={1890}
            alt=""
          ></Image>
        </div>
        <div id="wraper_3" className="  h-screen   overflow-hidden relative ">
          <Image
            id="img_3"
            className=" absolute   -top-100  object-cover w-full h-[170%] will-change-transform"
            src={
              "https://images.pexels.com/photos/10620483/pexels-photo-10620483.jpeg"
            }
            width={2000}
            height={1890}
            alt=""
          ></Image>
        </div>
      </section>
      <section id="pin-sc" className="relative h-screen w-full overflow-hidden">
        <section
          id="testimonials"
          className="w-screen min-h-screen  border-b border-white/9 bg-[#121111] px-4 sm:px-8 py-5 z-2"
        >
          <span
            id="testimonials-span"
            className="text-orange-700 absolute w-fit h-fit z-9001"
          >
            {"// More Projects"}
          </span>
          <div className="w-full min-h-screen flex flex-wrap md:flex-nowrap   gap-6">
            <div className="flex flex-col  gap-3  ">
              <div className="w-full h-[90%] border border-white/20  rounded-2xl overflow-hidden">
                {" "}
                <Image
                  src={
                    "https://images.pexels.com/photos/10620483/pexels-photo-10620483.jpeg"
                  }
                  width={1920}
                  height={1080}
                  quality={75}
                  unoptimized
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-[20%]  border border-white/20  rounded-2xl  px-5  py-10 sm:py-2 flex flex-col  justify-center">
                <p className="text-body sm:text-title font-bold">
                  Formual Vintage
                </p>{" "}
                <p className="text-body">(2026)</p>
              </div>
            </div>
            <div className="flex flex-col  gap-3  ">
              <div className="w-full h-[90%] border border-white/20  rounded-2xl overflow-hidden">
                {" "}
                <Image
                  src={
                    "https://images.pexels.com/photos/10620483/pexels-photo-10620483.jpeg"
                  }
                  width={1920}
                  height={1080}
                  quality={75}
                  unoptimized
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-[20%]  border border-white/20  rounded-2xl  px-5  py-10 sm:py-2 flex flex-col  justify-center">
                <p className="text-body sm:text-title font-bold">
                  Formual Vintage
                </p>{" "}
                <p className="text-body">(2026)</p>
              </div>
            </div>
            <div className="flex flex-col  gap-3  ">
              <div className="w-full h-[90%] border border-white/20  rounded-2xl overflow-hidden">
                {" "}
                <Image
                  src={
                    "https://images.pexels.com/photos/10620483/pexels-photo-10620483.jpeg"
                  }
                  width={1920}
                  height={1080}
                  quality={75}
                  unoptimized
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-[20%]  border border-white/20  rounded-2xl  px-5  py-10 sm:py-2 flex flex-col  justify-center">
                <p className="text-body sm:text-title font-bold">
                  Formual Vintage
                </p>{" "}
                <p className="text-body">(2026)</p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="footer"
          className="-z-1 absolute top-0 overflow-hidden w-screen h-screen bg-[#e0e0e0] text-white/90 flex items-center justify-end flex-col "
        >
          <div className=" w-full flex justify-between  h-50 sm:h-40 px-4 sm:px-8 items-baseline z-12  mix-blend-difference">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col cursor-none gap-2">
                <a
                  href="mailto:ahmedadeldiv@gmail.com"
                  data-title="Mail"
                  className="link cursor-none"
                >
                  <span className="hidden sm:block">
                    Mail: ahmedadeldiv@gmai.com
                  </span>
                  <CiMail size={25} className="sm:hidden" />
                </a>
                <a
                  href="tel:+201090324648"
                  data-title="Phone"
                  className="link cursor-none"
                >
                  <span className="hidden sm:block">Phone: +201090324648</span>
                  <BiPhone size={25} className="sm:hidden" />
                </a>
              </div>
              <div id="links-footer" className="flex gap-5 justify-between">
                <Link
                  href={"https://www.linkedin.com/in/ahmed-adel-said/"}
                  data-title="Linkedin"
                  className="link hover:cursor-none"
                >
                  <span className="hidden sm:block">LinkedIn</span>
                  <LiaLinkedin size={30} className="sm:hidden" />
                </Link>
                <Link
                  href={"https://github.com/AhmedDula"}
                  data-title="GitHub"
                  className="link hover:cursor-none"
                >
                  <span className="hidden sm:block">GitHub</span>
                  <BsGithub size={25} className="sm:hidden" />
                </Link>
                <Link
                  href={"https://www.instagram.com/jr.ahmd/"}
                  data-title="Instagram"
                  className="link hover:cursor-none"
                >
                  <span className="hidden sm:block">Instagram</span>
                  <BsInstagram size={25} className="sm:hidden" />
                </Link>
              </div>
            </div>
            <div className="">
              <h1 className="font-semibold sm:text-6xl">
                {"// Web Developer"}
              </h1>
              <h1 className="font-semibold sm:text-6xl pl-4 sm:pl-12">
                Art Designer
              </h1>
            </div>
          </div>
          <Image
            id="silver"
            src={"/ahmed-Photoroom.png"}
            className="object-cover sm:object-contain grayscale w-full h-[120%]  top-10 absolute -z-1"
            width={2000}
            unoptimized
            height={1200}
            quality={100}
            alt="hero-img"
          />
        </section>
      </section>
    </main>
  );
}

export default Page;
