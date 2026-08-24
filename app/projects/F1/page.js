"use client";
import React from "react";
import MobileNav from "../../_components/mobileNav";
import Nav from "../../_components/nav";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

function Page() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
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
    scrub: true,
    // markers:true
  },
});
gsap.to("#img_2", {
  yPercent: 30,
  ease: "none",
  scrollTrigger: {
    trigger: "#wraper_2",
    start: "top center",
    end: "bottom center",
    scrub: true,
    markers:true
  },
});
gsap.to("#img_3", {
  yPercent: 30,
  ease: "none",
  scrollTrigger: {
    trigger: "#wraper_3",
    start: "top center",
    end: "bottom center",
    scrub: true,
    // markers:true
  },
});
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
      <section className="f min-h-screen  border-b">
        <div className="  h-screen max-w-screen ">
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
        <div className="e  h-screen  grid place-items-center text-2xl">
          <h1>
            I’m a versatile developer & designer who partners toturn ideas into
            real products. I focus on clear interfaces, sharp decisions, and
            fast execution.
          </h1>
        </div>

        {/* <div className='  h-full  grid place-items-center text-9xl bg-red-200'><h1>Ahmed Adel</h1></div> */}
      </section>
      <section className="min-h-screen w-full border-b-red-500 gap-6 flex flex-col ">
        <div id="wraper_1" className="  h-screen   overflow-hidden relative  ">
          <Image
          id="img_1"
            className=" absolute   -top-100  object-cover w-full h-[170%]"
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
            className=" absolute   -top-50  object-cover w-full h-[170%]"
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
            className=" absolute   -top-100  object-cover w-full h-[170%]"
            src={
              "https://images.pexels.com/photos/10620483/pexels-photo-10620483.jpeg"
            }
            width={2000}
            height={1890}
            alt=""
          ></Image>
        </div>
        <div className="  h-screen  grid place-items-center "></div>
        <div className="  h-screen  grid place-items-center "></div>
      </section>
    </main>
  );
}

export default Page;
