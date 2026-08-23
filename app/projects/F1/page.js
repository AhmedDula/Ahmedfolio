 "use client"
 import React from 'react'
import MobileNav from "../../_components/mobileNav";
import Nav from "../../_components/nav";
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
                // markers:true,
                scrub:true,
                start:'top ',
                end:'center',
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
        <section className='f min-h-screen w-full border-b'>
            <div className='img scale-110 h-screen '>

     <Image
                      src={"https://images.pexels.com/photos/10620483/pexels-photo-10620483.jpeg"}
                      width={1920}
                      height={1080}
                      quality={75}
                      unoptimized
                      alt=""
                      className="w-full h-full object-cover"
                    />
            </div>
    <div className='e  h-screen  grid place-items-center text-2xl'><h1>I’m a versatile developer & designer who partners toturn ideas into real products. I focus on clear interfaces, sharp decisions, and fast execution.</h1></div>
  
    
    {/* <div className='  h-full  grid place-items-center text-9xl bg-red-200'><h1>Ahmed Adel</h1></div> */}
        </section>
<section className='min-h-screen w-full border-b-red-500 gap-6 flex flex-col'>

    <div className='  h-screen  grid place-items-center '></div>
    <div className='  h-screen  grid place-items-center '></div>
    <div className='  h-screen  grid place-items-center '></div>

</section>

   </main>
  )
}

export default Page