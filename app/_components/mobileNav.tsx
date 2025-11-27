"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import React, { useState } from "react";
import NavLink from "./links";
import { BiCopyright } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { TbMenu } from "react-icons/tb";

function MobileNav() {
  const [openNav, setOpenNav] = useState(false);
  useGSAP(() => {
    if (openNav) {
      gsap
        .timeline()
        .to("#navMO", {
          yPercent: 100,
          autoAlpha: 1,
          ease:"power2.out",
          duration:1
        })
        .from(".linkNav", {
          autoAlpha: 0,
          mask: 2,
          y: 20,
          ease:'back.out'
        });
    } else {
      gsap.to("#navMO", {
        yPercent: -100,
        autoAlpha: 1,
        duration:1
      });
    }
  }, [openNav]);
  return (
    <div className="bg-transparent z-30 h-15 w-full p-5 sm:hidden absolute text-lg flex flex-col justify-between text-white/90">
      <div className="flex">
        <h1 className="flex items-center-safe w-full">
          <span>
            <BiCopyright size={18} />
          </span>{" "}
          Ahmed
        </h1>{" "}
        <button className="" onClick={() => setOpenNav(!openNav)}>
          <TbMenu size={20} />
        </button>
      </div>
      <div
        id="navMO"
        className="absolute top-0 left-0 z-30 border-b border-white/10 -translate-y-full bg-[#121111] invisible min-h-40 w-full flex flex-col p-4 gap-4 justify-between"
      >
        <div className="flex justify-between">
          <h1 className="flex items-center-safe">
            <span>
              <BiCopyright size={18} />
            </span>{" "}
            Ahmed
          </h1>{" "}
          <button className="" onClick={() => setOpenNav(!openNav)}>
            <AiOutlineClose size={20} />
          </button>
        </div>
        <div className="linkNav " onClick={()=>gsap.to(window,{
            scrollTo:{y:'#projects'}
        })}>
          <NavLink href={"/"}>Projects</NavLink>
        </div>
        <div className="linkNav " onClick={()=>gsap.to(window,{
            scrollTo:{y:'#intro'}
        })}>
          <NavLink href={"/"}>About</NavLink>
        </div>
        <div className="linkNav " onClick={()=>gsap.to(window,{
            scrollTo:{y:'max'}
        })}>
          <NavLink href={"/"}>Contacts</NavLink>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
