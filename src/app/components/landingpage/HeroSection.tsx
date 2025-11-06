"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import GradientText from '../framermotion/GradientText'
import { ArrowRight } from 'lucide-react'
import { Particles } from '@/components/ui/particles'
import { Meteors } from '@/components/ui/meteors'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <>  
    <div className='absolute w-full h-screen overflow-hidden'>
     <Particles className='max-md:hidden'/>
    <Meteors number={7} positionmeteor={1800}   />
    </div>
    

    

     <section className="min-h-screen flex flex-col items-center justify-center  text-white px-4
     "
    //  [mask-image:linear-gradient(to_top,transparent,black_10%)]
    //  style={{ backgroundImage: "linear-gradient(180deg,rgba(0, 0, 0, 1) 3%, rgba(0, 0, 0, 1) 20%, rgba(255, 119, 0, 1) 100%)" }}
    //  style={{ backgroundImage: "radial-gradient(circle at center bottom, rgba(255,119,0,1) 0%, rgba(0,0,0,1) 100%)" }} 
      // style={{backgroundImage:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 3%, rgba(255, 119, 0, 1) 72%, rgba(0, 0, 0, 1) 100%)"}}
    //  style={{backgroundImage: " radial-gradient(circle,rgba(255, 111, 0, 1) 20%, rgba(0, 0, 0, 1) 100%);"}}
//      style={{
//   backgroundImage:
//     "linear-gradient(180deg, #000000 0%, #0d0600 25%, #1c0a00 55%, #ff6a00 100%)",
// }}
style={{
  backgroundImage: `
    linear-gradient(
      180deg,
      #000000 0%,
      #050200 10%,
      #0a0400 30%,
      #1c0a00 50%,
      #ff6a00 100%
    )
  `,
}}
// style={{
//   backgroundImage:
//     "linear-gradient(180deg, #000000 0%, #0a0600 35%, #1a0e00 55%, #ff6a00 90%)",
// }}
// style={{
//   backgroundImage:
//     "radial-gradient(circle at 50% 60%, rgba(255,106,0,0.45) 0%, rgba(10,5,0,1) 60%, rgba(0,0,0,1) 100%)",
// }}


     >
      

      
        <GradientText className='text-base max-md:text-sm' leftColor='#fb923c' midColor='white' rightColor='#fb923c'>

        For innovative global businesses.
        </GradientText>
      
      <h1 className="text-5xl md:text-7xl font-bold text-center leading-tight mb-3">
        Empower and Elevate <br />
        <span className="text-orange-400">IT Solutions</span> with AI
      </h1>
      <p className="text-lg md:text-xl text-center text-neutral-300 mb-8 max-w-2xl">
        Sea Smartz delivers world-class IT services, seamlessly blending expert knowledge and AI to boost productivity, efficiency, and global reach for your enterprise.
      </p>
      <div className="flex flex-col  justify-center items-center sm:flex-row gap-4 mb-6">
        
        <Button className="px-4 py-5 text-lg z-40   font-semibold rounded-[10px] shadow" variant="default">
          <Link href='/contact' className='flex items-center gap-2'>
          
          Start your journey 
          <span  
         
          ><ArrowRight className=''/></span>
          </Link>
        </Button>
        <Button className=" max-sm:w-30 z-40 px-4 py-5 bg-muted-foreground/20 text-primary text-lg font-semibold rounded-[10px]  " variant="outline">
         <Link href="/contact" className=''> 
         <span className="sr-only">Contact SeaSmartz - Learn more by contacting us</span>
         Learn More
         </Link>
        </Button>
      </div>
      <div className=" items-center  gap-2  mt-8 max-sm:hidden">
        <span className="text-xl">★★★★★</span>
        <span className="text-neutral-200 text-base font-semibold"> Leading the Next Wave of AI Innovation</span>
      </div>
      
    </section>
     {/* <div className="flex mt-0 p justify-end bg-tramsparent ">
       <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        stroke="black"
        strokeWidth={0.1}
        style={{  display: 'block', width: '100%', height:40 }}
      >
        <path 
          d="M0 0 L0 120 L420 120 Q440 120 450 100 L480 20 Q490 0 510 0 L690 0 Q710 0 720 20 L750 100 Q760 120 780 120 L1200 120 L1200 0 Z" 
          fill="#ff7700"
        />
      </svg>

        </div> */}
        
        <div className='bg-black max-sm:hidden'
        >

         <svg 
        viewBox="0 0 1500 99" 
        preserveAspectRatio="none"
        style={{   width: '100%', height: 50 }}
      >
        <path 
          d="M0 0H200C240 0 267 100 300 100H1200C1240 100 1265.3333 0 1300 0H1440" 
          fill="#ff6a00"
        />
      </svg>
          </div>


        {/* <div className='bg-chart-3 max-sm:hidden'
        >

         <svg 
        viewBox="0 0 1500 50" 
        preserveAspectRatio="none"
        style={{   width: '100%', height: 40 }}
      >
        <path 
          d="M0 100H190c50 0 67-100 120-100h890c50 0 67 100 120 100h140" 
          fill="black"
        />
      </svg>
          </div> */}
    </>
    
  )
}

export default HeroSection
