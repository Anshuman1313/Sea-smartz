"use client"
import HeroSection from "./components/landingpage/HeroSection";
// import  Lenis from "lenis";
// import { useEffect } from "react";
import GrowthCurve from "./components/landingpage/GrowthCurve";
import Indutries from "./components/landingpage/Indutries";
import LogoSection from "./components/landingpage/LogosSection";
import LandingLoader from "./components/Layout/LandingLoader";
import BlurryCursorSection from "./components/gsap/MovingCursor/BlurryCursorSection";

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
      <LandingLoader />
      <HeroSection />
      <div className="  bg-background text-muted-foreground flex flex-col px-2 md:px-0 overflow-clip">
        <div className="min-h-screen w-full overflow-hidden max-md:hidden mt-10 ">
          <BlurryCursorSection />

        </div>
        <div className=" text-4xl w-full md:hidden "
        >
          <LogoSection />
        </div>

        <div className="min-h-screen text-4xl w-full flex justify-center items-center   ">
          {/* <ScrollComponent/> */}
          <Indutries />
        </div>


        <div className="min-h-screen max-md:hidden  w-full flex justify-center items-center ">
          <GrowthCurve />

        </div>

        <div className=" text-4xl w-full max-md:hidden "
        >
          <LogoSection />
        </div>


      </div>


    </>
  );
}
