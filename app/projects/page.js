 "use client"
 import React from 'react'
import MobileNav from "./../_components/mobileNav";
import Nav from "./../_components/nav";
import Image from 'next/image';
import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

function Page() {
    gsap.registerPlugin(ScrollTrigger) 
    useGSAP(()=>{
        gsap.to('.img',{
            scrollTrigger:{
                trigger:'.f',
                markers:true,
                scrub:true,
                start:'top ',
                end:'bottom',
                pin:".img",
                pinSpacing:false,
                // pinSpacer:false
            },
        
            opacity:0,
            scale:1
          
            // yPercent:-100
        })
       
    })
  return (
   <main className=''>
    <nav
          id="Nav"
          className="z-300 relative w-full  overflow-visible h-fit text-white mix-blend-difference "
        >
          <Nav />
          <MobileNav />
        </nav>
        <section className='f h-screen w-full '>
          
        </section>
   </main>
  )
}

export default Page