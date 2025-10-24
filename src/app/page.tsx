"use client"
import HeroSection from "./components/landingpage/HeroSection";
// import  Lenis from "lenis";
// import { useEffect } from "react";
import GrowthCurve from "./components/landingpage/GrowthCurve";
import Indutries from "./components/landingpage/Indutries";
import LogoSection from "./components/landingpage/LogosSection";

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
      <HeroSection />
      <div className="  bg-background text-muted-foreground flex flex-col px-2 md:px-0">

        <div className="min-h-screen text-4xl w-full  "
        >
          <LogoSection />
        </div>
        <div className="min-h-screen text-4xl w-full flex justify-center items-center   ">
          {/* <ScrollComponent/> */}
          <Indutries />
        </div>

        <div className="min-h-screen  w-full flex justify-center items-center ">
          <GrowthCurve />

        </div>
       
      </div>


    </>
  );
}
