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
    <div className="min-h-screen text-4xl w-full flex justify-center items-center ">
    <div className="h-full w-full p-60">

      <AnimatedPathway/>
    </div>
      
      </div>
    <div className="min-h-screen text-4xl w-full flex justify-center items-center "> This for testing the smoothe scrool behaviour</div>
    <div className="min-h-screen text-4xl w-full flex justify-center items-center "> This for testing the smoothe scrool behaviour</div>
   </div>
    

   </>
  );
}
