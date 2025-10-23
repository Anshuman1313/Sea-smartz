"use client"
import React, { useRef } from 'react'
import { gsap } from "gsap";
import IndustriesCard from '../framermotion/IndustriesCard'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Indutries = () => {
    const HeadingRef = useRef<HTMLDivElement>(null)
    const SubHeadingRef = useRef<HTMLDivElement>(null)
    useGSAP(()=>{
        gsap.registerPlugin(SplitText,ScrollTrigger);

        let split = SplitText.create(HeadingRef.current,{
            type: "words"
        })
        let split2 = SplitText.create(SubHeadingRef.current,{
            type: "words,lines"
        })
        gsap.from(split.words,{
            scrollTrigger: {
                trigger: HeadingRef.current,
                // markers: true,
                start: "-250 center",
                end: "-100 center",
               
            },
            x: 50,
            duration:1,
            stagger:{
                each: 0.09,
            },
            autoAlpha: 0
            
        })
        gsap.from(split2.lines,{
              scrollTrigger: {
                trigger: HeadingRef.current,
                // markers: true,
                start: "-250 center",
                end: "-100 center",
                
            },
            
            y:80,
            opacity:0,
            stagger: 0.02
            
        })
        
    })

  return (
    <div className='flex flex-col justify-center items-center w-full space-y-4  mt-40 mb-20 font-sans text-foreground'>
      <h1 className='text-5xl font-semibold text-foreground ' ref={HeadingRef}>Empowering Digital Transformation Across Industries</h1>
      <h3 className='text-base  w-2/3 text-foreground/60' ref={SubHeadingRef}>We help businesses across diverse sectors harness the power of technology to innovate, scale, and stay future-ready. Our IT solutions are designed to streamline operations, enhance customer experiences, and drive measurable business outcomes.</h3>
     <div className='max-w-4xl mt-5'>

        <IndustriesCard/>
     </div>
     
    </div>
  )
}

export default Indutries
