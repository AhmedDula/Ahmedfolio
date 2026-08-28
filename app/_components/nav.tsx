"use client";

import NavLink from "./links";
import { MdCopyright } from "react-icons/md";
// import gsap from "gsap";

function Nav() {
  return (
    <div className="bg-transparent z-30 h-15 w-full p-5 hidden absolute text-lg sm:flex justify-between  ">
      <NavLink href="/">
        <MdCopyright /> Ahmed
      </NavLink>
      
        <NavLink href="/projects">Projects</NavLink>
      
      
        <NavLink href="/about">About</NavLink>
      
      
        <NavLink href="/contacts">Contacts</NavLink>
      
    </div>
  );
}

export default Nav;
