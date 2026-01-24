"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Draggable, Observer, ScrollToPlugin } from "gsap/all";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import Nav from "./_components/nav";
import Link from "next/link";
import ScrollingText from "./_components/scrollingtext";
import { FiExternalLink } from "react-icons/fi";
import MobileNav from "./_components/mobileNav";
import { BiMailSend, BiPhone } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { LiaLinkedin } from "react-icons/lia";
import { BsGithub, BsInstagram } from "react-icons/bs";
// import ScrollingText2 from "./_components/scrollingtext2";
export default function Home() {
  // Plugins
  gsap.registerPlugin(
    useGSAP,
    ScrollTrigger,
    ScrollSmoother,
    ScrollToPlugin,
    SplitText,
    Draggable,
    Observer
  );
  // UseGSAP
  useGSAP(() => {
    // Smooth Scroll
    ScrollSmoother.create({
      smooth: 1.7,
      effects: true,
      ignoreMobileResize: true,
      // normalizeScroll: true,
    });
    ScrollSmoother.refresh();

    const quickX = gsap.quickTo("#follower", "x", { duration: 0.01 });
    const quickY = gsap.quickTo("#follower", "y", { duration: 0.01 });
    window.addEventListener("mousemove", (e) => {
      quickX(e.clientX);
      quickY(e.clientY);
    });
    const span = document.querySelector("#follower-h1");
    const links = document.querySelectorAll(".link");

    // Hero Animations
    links.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        const title = el.getAttribute("data-title");
        if (span) {
          span.textContent = title;
          const heroAnim = gsap.to("#follower", {
            scale: 1.9,
          });

          el.addEventListener("mouseleave", () => {
            gsap.to("#follower", {
              scale: 0,
              ease: "power2.inOut",
              duration: 0.5,
            });
            span.textContent = "";
          });
        }
      });
    });
    const heroTl = gsap
      .timeline()
      .from("#hero-title", {
        autoAlpha: 0,
        duration: 1.2,
        scale: -0.7,
        xPercent: 100,
      })
      .from(
        "#hero-footer",
        {
          autoAlpha: 0,
          duration: 1,
          scale: 1.01,
        },
        "<80%"
      )
      .from(
        "#Nav",
        {
          autoAlpha: 0,
          duration: 1,
          scale: 1.01,
        },
        "<"
      );
    gsap.to("#dula", {
      y: "-20%",
      ease: "none",
      scrollTrigger: { trigger: "#hero", scrub: true },
    });
    // -------Hero-------

    // iNTRO Animations
    ScrollTrigger.create({
      trigger: "#intro-content",
      pin: "#intro-span",
      pinSpacing: false,
    });
    const introSp = SplitText.create("#intro-h1", {
      type: "chars",
      smartWrap: true,
    });

    gsap.set(introSp.chars, {
      opacity: 0.4,
      force3D: true,
      willChange: "opacity",
    });
    ScrollTrigger.refresh();

    gsap.to(introSp.chars, {
      opacity: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#intro-h1",
        start: "top-=30% center",
        end: "50% center",
        scrub: 1,
      },
    });
    // const introSp = SplitText.create("#intro-h1", {
    //   type: "chars",
    //   smartWrap: true,
    // });
    // ScrollTrigger.refresh()
    // gsap.fromTo(
    //   introSp.chars,
    //   {
    //     autoAlpha: 0.4,
    //     stagger: {
    //       each: 0.3,
    //     },
    //     scrollTrigger: {
    //       trigger: "#intro-h1",
    //       start: "top-=30% center",
    //       end: "50% center",
    //       scrub: 1,
    //     },
    //   },
    //   {
    //     autoAlpha: 1,
    //     stagger: {
    //       each: 0.3,
    //     },
    //     scrollTrigger: {
    //       trigger: "#intro-h1",
    //       start: "top-=30% center",
    //       end: "50% center",
    //       scrub: 1,
    //     },
    //   }
    // );
    const linkSp = SplitText.create("#intro-link", {
      type: "chars",
      mask: "chars",
    });
    const introLn = document.getElementById("intro-link");
    introLn?.addEventListener("mouseenter", () => {
      gsap.fromTo(
        linkSp.chars,
        {
          y: 15,
        },
        {
          y: 0,
        }
      );
      gsap.to("#intro-works", {
        scale: 1.2,
        duration: 0.4,
        transformOrigin: "bottom",
      });
    });
    introLn?.addEventListener("mouseleave", () => {
      gsap.fromTo(
        linkSp.chars,
        {
          y: 15,
        },
        {
          y: 0,
        }
      );
      gsap.to("#intro-works", {
        scale: 0,
        duration: 0.4,
        transformOrigin: "bottom",
      });
    });
    // -------Intro------

    // Services Animations
    ScrollTrigger.create({
      trigger: "#service-content",
      end: "",
      pin: "#service-span",
      pinSpacing: false,
    });
    ScrollTrigger.create({
      trigger: "#service-1",
      start: "top top",
      end: "bottom top",
      pin: "#span-01",
      pinSpacing: false,
      onLeave: () => {
        gsap.to("#span-01", {
          scaleX: 0,
          autoAlpha: 0,
          rotationY: 180,
          duration: 0.5,
        });
      },
      onEnterBack: () => {
        gsap.to("#span-01", {
          scaleX: 1,
          autoAlpha: 1,
          rotationY: 0,
          duration: 0.5,
        });
      },
    });

    // Service 2
    ScrollTrigger.create({
      trigger: "#service-2",
      start: "top top",
      end: "bottom top",
      pin: "#span-02",
      pinSpacing: false,
      onEnter: () => {
        gsap.to("#span-02", {
          scaleX: 1,
          autoAlpha: 1,
          rotationY: 0,
          duration: 0.5,
        });
        gsap.to("#span-01", {
          scaleX: 0,
          autoAlpha: 0,
          rotationY: 180,
          duration: 0.5,
        });
      },
      onLeave: () => {
        gsap.to("#span-02", {
          scaleX: 0,
          autoAlpha: 0,
          rotationY: 180,
          duration: 0.5,
        });
      },
      onEnterBack: () => {
        gsap.to("#span-02", {
          scaleX: 1,
          autoAlpha: 1,
          rotationY: 0,
          duration: 0.5,
        });
        gsap.to("#span-01", {
          scaleX: 0,
          autoAlpha: 0,
          rotationY: 180,
          duration: 0.5,
        });
      },
      onLeaveBack: () => {
        gsap.to("#span-02", {
          scaleX: 0,
          autoAlpha: 0,
          rotationY: 180,
          duration: 0.5,
        });
        gsap.to("#span-01", {
          scaleX: 1,
          autoAlpha: 1,
          rotationY: 0,
          duration: 0.5,
        });
      },
    });

    // Service 3
    ScrollTrigger.create({
      trigger: "#service-3",
      start: "top top",
      end: "67% top",
      pin: "#span-03",
      pinSpacing: false,
      onEnter: () => {
        gsap.to("#span-03", {
          scaleX: 1,
          autoAlpha: 1,
          rotationY: 0,
          duration: 0.5,
        });
        gsap.to("#span-02", {
          scaleX: 0,
          autoAlpha: 0,
          rotationY: 180,
          duration: 0.5,
        });
      },
      onEnterBack: () => {
        gsap.to("#span-03", {
          scaleX: 1,
          autoAlpha: 1,
          rotationY: 0,
          duration: 0.5,
        });
        gsap.to("#span-02", {
          scaleX: 0,
          autoAlpha: 0,
          rotationY: 180,
          duration: 0.5,
        });
      },
      onLeaveBack: () => {
        gsap.to("#span-03", {
          scaleX: 0,
          autoAlpha: 0,
          rotationY: 180,
          duration: 0.5,
        });
        gsap.to("#span-02", {
          scaleX: 1,
          autoAlpha: 1,
          rotationY: 0,
          duration: 0.5,
        });
      },
    });
    // ------Services-------

    // projects Animation
    ScrollTrigger.create({
      trigger: "#projects",
      end: "bottom-=2%",
      pin: "#projects-span",
      pinSpacing: false,
      // markers:true
    });

    gsap.set(".project-1", {
      yPercent: 10,
    });
    gsap.set(".project", {
      yPercent: 100,
    });
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#projects-content",
          end: "+=500%",
          pin: true,
          scrub: 1,
          snap: {
            snapTo: "labelsDirectional", // Snap إلى labels مع اتجاه السكرول
            duration: { min: 0.3, max: 0.8 },
            ease: "power1.inOut",
          },
          pinSpacing: false,
        },
      })
      .addLabel("project1-start")
      .to("#project-1", { yPercent: 0, duration: 0.5 })
      .addLabel("project1-complete")
      .to("#project-1", { autoAlpha: 0, scale: 0.9, duration: 10 }, "+=1")
      .addLabel("project2-start")
      .to("#project-2", { yPercent: 0, duration: 10 }, "<")
      .addLabel("project2-complete")
      .to("#project-2", { autoAlpha: 0, scale: 0.9, duration: 10 }, "+=1")
      .addLabel("project3-start")
      .to("#project-3", { yPercent: 0, duration: 10 }, "<")
      .addLabel("project3-complete")
      .to("#project-3", { autoAlpha: 0.9, scale: 0.9, duration: 10 })
      .to(
        "#projects-content",
        { yPercent: -5, scale: 0.8, duration: 10 },
        "<+=0.5"
      );

    Observer.create({
      target: "#projects-content",
      onHover: () => {
        if (span) {
          span.textContent = "view";
        }
        gsap.to("#follower", {
          scale: 2.9,
          duration: 0.2,
          height: 25,
          width: 27,
          borderRadius: "100%",
          padding: "3px",
        });
      },
      onHoverEnd: () => {
        span ? (span.textContent = "") : "";
        gsap.to("#follower", {
          scale: 0,
          duration: 0.2,
          height: "fit-content",
          width: "fit-content",
          borderRadius: "16px",
          padding: "4px 8px 4px 8px",
        });
      },
    });
    // ------Projects------

    // Testimonials Animations
    ScrollTrigger.create({
      trigger: "#testimonials-content",
      pin: "#testimonials-span",
      pinSpacing: false,
    });
    const testimonialsSplit = SplitText.create("#testimonials-h2", {
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
        trigger: "#testimonials-h2",
        start: "top-=30% center",
        end: "50% center",
        scrub: 1,
      },
    });
    // ------Testimonials------
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
        "<"
      );
  });

  return (
    <main className="overflow-hidden">
      <div
        id="follower"
        className="min-w-3 min-h-3 py-1 px-2 invisible sm:visible scale-0 fixed rounded-2xl grid place-items-center pointer-events-none z-50 bg-red-500/90"
      >
        <span className="flex justify-between gap-0.5 items-center">
          <p id="follower-h1" className="text-[7px] font-semibold"></p>
          <FiExternalLink size={6} />
        </span>
      </div>
      <div id="smooth-content" className=" h-fit text-xl  overflow-hidden">
        <nav
          id="Nav"
          className="z-32 relative w-screen bg-amber-200 overflow-visible h-fit"
        >
          <Nav />
          <MobileNav />
        </nav>
        <section
          id="hero"
          className="relative overflow-hidden w-screen h-screen bg-[#e0e0e0] text-white/90 flex items-center justify-end flex-col "
        >
          <div id="hero-title" className="absolute top-[33%] left-[0%] z-20">
            <ScrollingText />
          </div>
          <div
            id="hero-footer"
            className="w-full flex justify-between h-50 sm:h-40 px-4 sm:px-8 items-baseline z-10"
          >
            <div id="links" className="flex flex-col justify-between">
              <Link
                href={"https://www.linkedin.com/in/ahmed-adel-said/"}
                data-title="Linkedin"
                className="link hover:cursor-none"
              >
                Linkedin
              </Link>
              <Link
                href={"https://github.com/AhmedDula"}
                data-title="GitHub"
                className="link hover:cursor-none"
              >
                GitHub
              </Link>
              <Link
                href={"https://www.instagram.com/jr.ahmd/"}
                data-title="Instagram"
                className="link hover:cursor-none"
              >
                Instagram
              </Link>
            </div>
            <div className="text-[5vw] sm:text-[3vw]">
              <h1 className="font-semibold ">{"// Web Developer"}</h1>
              <h1 className="font-semibold pl-4 sm:pl-12">Art Designer</h1>
            </div>
          </div>
          <Image
            id="dula"
            src={"/SurFace.jpg"}
            className="object-cover w-full top-0  h-[130%] absolute "
            width={1300}
            height={1080}
            alt="hero-img"
            
          />
        </section>
        <section
          id="intro"
          className=" sm:px-8 px-4 py-5 sm:py-2 w-screen h-[90vh] border-b border-white/9"
        >
          <div
            id="intro-content"
            className="relative h-full flex flex-col justify-center-safe items-center gap-9 overflow-hidden "
          >
            <span
              id="intro-span"
              className="absolute top-0 left-0 text-orange-700 w-fit h-12 z-90"
            >
              {"// intro"}
            </span>
            <h2
              id="intro-h1"
              className="sm:text-[3vw] font-bold sm:w-[80%] py-10 text-center"
            >
              I’m a versatile{" "}
              <span className="text-orange-700">
                developer & designer who partners to turn ideas into real
                products.
              </span>{" "}
              I focus on clear interfaces, sharp decisions, and fast execution.
            </h2>
            <div className="w-full flex flex-col gap-6 items-end-safe sm:px-20">
              <div className="flex flex-col sm:w-[50%] gap-7 items-center sm:items-start">
                <p className=" opacity-55 w-[70%] text-sm md:text-[1.2vw]">
                  Bringing your vision to life quickly and efficiently—whether
                  it&apos;s branding, apps, or websites—I&apos;ve got it
                  covered, delivering smooth and effective solutions from start
                  to finish.
                </p>
                <div
                  onClick={() =>
                    gsap.to(window, {
                      scrollTo: { y: "#projects" },
                    })
                  }
                  id="intro-link"
                  className="relative  py-2 w-45 sm:py-4 hover:text-black/90 text-white/60 border border-white/20 text-center rounded-full overflow-hidden"
                >
                  <div
                    id="intro-works"
                    className="absolute size-40 -bottom-9 left-[5%] scale-0  -z-1 rounded-full text-center bg-orange-700 "
                  />
                  See my Works
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="service"
          className="w-screen h-fit border-b border-white/9 px-4 sm:px-8 py-5 "
        >
          <div
            id="service-content"
            className="relative w-full h-full flex flex-col sm:flex-row"
          >
            <span
              id="service-span"
              className="text-orange-700 absolute w-fit h-fit z-91"
            >
              {"// service"}
            </span>

            <div
              id="service-pin"
              style={{ WebkitTextStroke: "3px #fff" }}
              className=" hidden text-center w-[40%] md:flex flex-col "
            >
              <div id="service-1" className="relative h-1/3 ">
                <h1 id="span-01" className="text-[13vw] text-transparent">
                  01
                </h1>
              </div>
              <div id="service-2" className="relative h-1/3">
                <h1
                  id="span-02"
                  className="text-[13vw] text-transparent invisible"
                >
                  02
                </h1>
              </div>
              <div id="service-3" className="relative h-1/3">
                <h1
                  id="span-03"
                  className="text-[13vw] text-transparent invisible"
                >
                  03
                </h1>
              </div>
            </div>

            <div
              id="right-side"
              className=" h-fit md:w-[60%] flex flex-col gap-10  md:gap-70 py-10 sm:pt-50"
            >
              <div
                id="service-brand"
                className="flex flex-col justify-start gap-5 md:gap-20"
              >
                <div className="flex flex-col  ">
                  <h2 className="sm:text-[3.5vw] font-bold">
                    Branding & Marketing
                  </h2>
                  <p className="sm:w-2/3 text-sm sm:text-[.9vw]  sm:px-3 opacity-55">
                    Branding that builds trust and drives loyalty through clear
                    visuals and messaging. into an unforgettable online
                    experience.
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between items-center px-3 border-y border-white/16 h-13">
                    <h3>Brand Strategy and Messaging</h3>
                    01
                  </div>
                  <div className="flex justify-between items-center-safe px-3 border-b border-white/16 h-13">
                    <h1>Logo Design</h1>02
                  </div>
                  <div className="flex justify-between items-center-safe px-3 border-b border-white/16 h-13">
                    <h1>Visual Identity</h1>03
                  </div>
                  <div className="flex justify-between items-center-safe px-3 border-b border-white/16 h-13">
                    <h1>Brand Guidelines & Frameworks</h1>04
                  </div>
                  <div className="flex justify-between items-center-safe px-3 border-b border-white/16 h-13">
                    <h1>Marketing materials</h1>05
                  </div>
                  <div className="flex justify-between items-center-safe px-3 border-b border-white/16 h-13">
                    <h1>Motion Design</h1>06
                  </div>
                </div>
              </div>

              <div
                id="service-web"
                className=" flex flex-col justify-start gap-5 md:gap-20"
              >
                <div className="flex flex-col  ">
                  <h2 className="sm:text-[3.5vw] font-bold">Website Design </h2>
                  <p className="sm:w-2/3 text-sm sm:text-[.9vw] sm:px-3 opacity-55">
                    Not just about aesthetics, but about developing logical,
                    scalable design systems that are precisely tailored to the
                    web and app application.
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between items-center px-3 border-y border-white/16 h-13">
                    <h3>Landing Pages </h3>
                    01
                  </div>
                  <div className="flex justify-between items-center-safe px-3 border-b border-white/16 h-13">
                    <h1>Blogs</h1>02
                  </div>
                  <div className="flex justify-between items-center-safe px-3 border-b border-white/16 h-13">
                    <h1>E-commerce</h1>03
                  </div>
                  <div className="flex justify-between items-center-safe px-3 border-b border-white/16 h-13">
                    <h1>Complex Websites</h1>04
                  </div>
                  <div className="flex justify-between items-center-safe px-3 border-b border-white/16 h-13">
                    <h1>Corporate Websites</h1>05
                  </div>
                  <div className="flex justify-between items-center-safe px-3 border-b border-white/16 h-13">
                    <h1>3D Web Design</h1>06
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-start gap-5 md:gap-20">
                <div className="flex flex-col">
                  <h2 className="sm:text-[3.5vw] font-bold">Web Development</h2>
                  <p className="sm:w-2/3 text-sm sm:text-[.9vw] sm:px-3 opacity-55">
                    User-focused app design that maximizes usability and
                    encourages retention.
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between items-center px-3 border-y border-white/16 h-13">
                    <h3>Framer, Webflow, or WordPress Builds</h3>
                    01
                  </div>
                  <div className="flex justify-between items-center-safe px-3 border-b border-white/16 h-13">
                    <h1>CMS Integration</h1>02
                  </div>
                  <div className="flex justify-between items-center-safe px-3 border-b border-white/16 h-13">
                    <h1>SEO Optimization</h1>03
                  </div>
                  <div className="flex justify-between items-center-safe px-3 border-b border-white/16 h-13">
                    <h1>Site Migrations</h1>04
                  </div>
                  <div className="flex justify-between items-center-safe px-3 border-b border-white/16 h-13">
                    <h1>Marketing materials</h1>05
                  </div>
                  <div className="flex justify-between items-center-safe px-3 border-b border-white/16 h-13">
                    <h1>Motion Design</h1>06
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="relative h-[520vh] sm:h-[600vh] w-screen  border-b border-white/9 px-4 sm:px-8 py-5 "
        >
          <span
            id="projects-span"
            className="text-orange-700 absolute w-fit h-fit z-91"
          >
            {"// projects"}
          </span>
          <div
            id="projects-content"
            className="relative w-full h-screen  overflow-hidden sm:cursor-none  flex flex-col flex-nowrap "
          >
            <Link
              href={"/1"}
              id="project-1"
              className="project-1 bg-[#121111] absolute p-5 rounded-3xl w-full min-h-full  gap-2 flex flex-col md:flex-row sm:cursor-none"
            >
              <div className=" md:w-[70%]  rounded-2xl border border-white/10 min-h-full overflow-hidden">
                <Image
                  src={"/Formula1.jpg"}
                  width={1300}
                  height={1000}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className=" md:w-[30%]  rounded-2xl border border-white/10 min-h-full flex flex-col justify-between p-6">
                <div className="flex flex-col gap-5">
                  <span>( 2030 )</span>
                  <h2 className="text-3xl font-bold">Formula One </h2>
                  <p className="text-sm">
                    For Formula Vintage, we crafted a design that honors the
                    rich heritage of classic cars while adding a modern twist.
                    Combining timeless elegance with sleek, contemporary
                    elements, we created an experience that appeals to both
                    enthusiasts and newcomers, celebrating the past with a fresh
                    perspective.
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
            <Link
              href={"/2"}
              id="project-2"
              className="project bg-[#121111] p-4 rounded-3xl absolute w-full min-h-full gap-2 flex flex-col md:flex-row sm:cursor-none"
            >
              <div className=" md:w-[70%] border border-white/10 rounded-2xl  min-h-full overflow-hidden ">
                <Image
                  src={"/SurFace.jpg"}
                  width={1300}
                  height={1000}
                  alt=""
                  className="w-full  h-full object-cover"
                />
              </div>
              <div className=" md:w-[30%] border border-white/10 rounded-2xl  min-h-full flex flex-col justify-between p-6">
                <div className="flex flex-col gap-5">
                  <span>( 2030 )</span>
                  <h2 className="text-3xl font-bold">Sur Face </h2>
                  <p className="text-sm">
                    portfolio showcases a fully responsive, high-performance web
                    experience built with modern front-end techniques. Every
                    section adapts smoothly to all screen sizes, ensuring a
                    consistent and polished look on mobile, tablet, and desktop.
                    design focuses on clarity, smooth motion, and seamless
                    responsiveness—highlighting both technical skill and
                    attention to user experience.
                  </p>
                </div>
                <div>
                  <h3 className=" py-2 border-b border-white/20">
                    Landing Page
                  </h3>
                  <h3 className=" py-2 border-b border-white/20">Animations</h3>
                  <h3 className=" py-2 border-b border-white/20">
                    Performance
                  </h3>
                </div>
              </div>
            </Link>
            <Link
              href={"https://ciel-d-or.vercel.app/"}
              id="project-3"
              className="project bg-[#121111] p-4 rounded-3xl absolute w-full h-full gap-2 flex flex-col md:flex-row sm:cursor-none"
            >
              <div className=" md:w-[70%] border border-white/10 rounded-2xl  overflow-hidden ">
                <Image
                  src={"/ciel.jpg"}
                  width={1400}
                  height={1000}
                  alt="2"
                  className="w-full min-h-full object-cover"
                />
              </div>
              <div className=" md:w-[30%] border border-white/10 rounded-2xl flex flex-col justify-between p-6">
                <div className="flex flex-col gap-5">
                  <span>( 2030 )</span>
                  <h2 className="text-3xl font-bold">Ciel D&apos;or</h2>
                  <p className="text-sm">
                    Ciel Dor is a responsive restaurant website that blends
                    elegant visuals with tasteful scroll-triggered animations.
                    As users scroll, subtle transitions reveal the story of the
                    menu, chef, and interior — guiding attention, improving
                    discoverability, and creating a memorable browsing
                    experience without sacrificing speed. Built with
                    accessibility and performance in mind, the site adapts
                    beautifully across devices and keeps interactions fast and
                    effortless.
                  </p>
                </div>
                <div>
                  <h3 className=" py-2 border-b border-white/20">Luxury</h3>
                  <h3 className=" py-2 border-b border-white/20">
                    Smooth Scrolling
                  </h3>
                  <h3 className=" py-2 border-b border-white/20">Simple</h3>
                </div>
              </div>
            </Link>
          </div>
        </section>
        <section
          id="pin-sc"
          className="relative h-screen w-screen overflow-hidden"
        >
          <section
            id="testimonials"
            className="w-screen h-screen border-b border-white/9 bg-[#121111] px-4 sm:px-8 py-5 z-2"
          >
            <span
              id="testimonials-span"
              className="text-orange-700 absolute w-fit h-fit z-9001"
            >
              {"// Testimonials"}
            </span>
            <div
              id="testimonials-content"
              className="w-full h-[90%] py-40 flex flex-col gap-3 items-end justify-center-safe"
            >
              <div className="sm:w-[80%] flex items-center-safe sm:justify-between">
                <h2
                  id="testimonials-h2"
                  className="text-[5vw] md:text-[3.4vw] font-bold w-[80%] sm:w-[70%] "
                >
                  “His keen eye for detail{" "}
                  <span className=" text-orange-700">
                    and innovative approach impressed our team, turning
                    challenge creative solutions that set him apart.”{" "}
                  </span>
                </h2>

                <div className="w-fit border-3 border-orange-600/90  rounded-full overflow-hidden ">
                  <Image
                    src={"/dula3.webp"}
                    width={500}
                    height={500}
                    alt=""
                    className="size-15 sm:size-20 object-cover translate-x-1.5  "
                  />
                </div>
              </div>
              <div className="w-full sm:w-[80%]">
                <p className="font-semibold">{"// Ahmed Adel"}</p>
                <p className="opacity-55">CEO, Founder</p>
              </div>
            </div>
          </section>
          <section
            id="footer"
            className="-z-1 absolute top-0 overflow-hidden w-screen h-screen bg-[#e0e0e0] text-white/90 flex items-center justify-end flex-col "
          >
            <div className=" w-full flex justify-between  h-50 sm:h-40 px-4 sm:px-8 items-baseline z-12">
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
                    <span className="hidden sm:block">
                      Phone: +201090324648
                    </span>
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
              src={"/surFace.png"}
              className="object-cover w-full h-[160%] top-0 absolute -z-1"
              width={13600}
              height={13690}
              alt="hero-img"
            />
          </section>
        </section>
      </div>
    </main>
  );
}
