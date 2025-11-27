"use client";
import React from "react";
import NavLink from "./links";
import { MdCopyright } from "react-icons/md";
import gsap from "gsap";

function Nav() {
  return (
    <div className="bg-transparent z-30 h-15 w-full p-5 hidden absolute text-lg sm:flex justify-between text-white/90">
      <NavLink href="/">
        <MdCopyright /> Ahmed
      </NavLink>
      <div onClick={()=>gsap.to(window,{
            scrollTo:{y:'#projects'}
        })}>
        {" "}
        <NavLink href="#Projects">Projects</NavLink>
      </div>
      <div onClick={()=>gsap.to(window,{
            scrollTo:{y:'#intro'}
        })}>
        <NavLink href="#About">About</NavLink>
      </div>
      <div onClick={()=>gsap.to(window,{
            scrollTo:{y:'max'}
        })}>
        {" "}
        <NavLink href="#Contacts">Contacts</NavLink>
      </div>
    </div>
  );
}

export default Nav;
