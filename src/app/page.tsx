"use client"
import { Meteors } from "@/components/ui/meteors";
import AnimatedGradientBackground from "./components/gradientbackgrounds/AnimatedGradient";
import DecorativeBar from "./components/gradientbackgrounds/DecorativeBanner";
import GrayBanner from "./components/gradientbackgrounds/GrayBanner";
import HeroSection from "./components/landingpage/HeroSection";
// import  Lenis from "lenis";
// import { useEffect } from "react";
import { motion } from "motion/react";
import AnimatedPathway from "./components/gsap/Cuve";
import GrowthCurve from "./components/landingpage/GrowthCurve";
import ScrollComponent from "./components/gsap/ScrollTrigger1";

export default function Home() {
  // useEffect(() => {
  //   const lenis = new Lenis();
  //   function raf(time: number) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf); 
  //   }
  //   requestAnimationFrame(raf);
  // }, [])
  //this is for the custom applying for client component
  

  return (
   <>
    <HeroSection/>
   <div className="  bg-background text-muted-foreground flex flex-col px-2 md:px-0">
    <div className="min-h-screen text-4xl w-full flex justify-center items-center  ">
       {/* <ScrollComponent/> */} Scroll down
       </div>
    <div className="min-h-screen  w-full flex justify-center items-center ">
    <GrowthCurve/>
      
      </div>
    <div className="min-h-screen text-4xl w-full flex justify-center items-center "> This for testing the smoothe scrool behaviour</div>
   </div>
    

   </>
  );
}
