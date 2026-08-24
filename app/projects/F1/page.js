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
        gsap.from('.img',{
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
        
            opacity:1,
            scale:1.1
          
            // yPercent:-100
        })
         gsap.to(".PR_IMG", {
      yPercent:25 ,
      ease: "none",
      scrollTrigger: { trigger: ".sec", start:"-=500px",end:"center",scrub: true, },
    });
       
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
        <section className='f min-h-screen  border-b'>
            <div className='  h-screen max-w-screen '>

     <Image
                      src={"https://images.pexels.com/photos/10620483/pexels-photo-10620483.jpeg"}
                      width={1920}
                      height={1080}
                      quality={75}
                      unoptimized
                      alt=""
                      className="img w-full h-full object-cover opacity-0"
                    />
            </div>
    <div className='e  h-screen  grid place-items-center text-2xl'><h1>I’m a versatile developer & designer who partners toturn ideas into real products. I focus on clear interfaces, sharp decisions, and fast execution.</h1></div>
  
    
    {/* <div className='  h-full  grid place-items-center text-9xl bg-red-200'><h1>Ahmed Adel</h1></div> */}
        </section>
<section className='min-h-screen w-full border-b-red-500 gap-6 flex flex-col sec'>

    <div className='  h-screen   overflow-hidden relative border-y '><Image className='PR_IMG absolute   -top-40 sm:object-contain object-cover h-[150%]' src={'https://blanckaeg.com/cdn/shop/files/DSC04495.jpg?v=1779395663&width=2400'} width={2000} height={1890} alt=''></Image></div>
    <div className='  h-screen   overflow-hidden relative border-y'><Image className='PR_IMG absolute   -top-40  object-cover h-[150%]' src={'https://blanckaeg.com/cdn/shop/files/DSC01111.jpg?v=1784789308&width=2400'} width={2000} height={1890} alt=''></Image></div>
    <div className='  h-screen   overflow-hidden relative border-y'><Image className='PR_IMG absolute   -top-80 sm:object-contain object-cover h-[150%]' src={'https://images.pexels.com/photos/10620483/pexels-photo-10620483.jpeg'} width={2000} height={1890} alt=''></Image></div>
    <div className='  h-screen  grid place-items-center '></div>
    <div className='  h-screen  grid place-items-center '></div>

</section>

   </main>
  )
}

export default Page