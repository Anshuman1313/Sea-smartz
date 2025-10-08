"use client"
// import  Lenis from "lenis";
import {Navbar} from "./components/Layout/Navbar";
// import { useEffect } from "react";

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
    <Navbar/>
   <div className="  bg-background text-muted-foreground flex flex-col px-2 md:px-0">
    <div className="min-h-screen text-4xl w-full flex justify-center items-center "> This for testing the smoothe scrool behaviour</div>
    <div className="min-h-screen text-4xl w-full flex justify-center items-center "> This for testing the smoothe scrool behaviour</div>
    <div className="min-h-screen text-4xl w-full flex justify-center items-center "> This for testing the smoothe scrool behaviour</div>
   </div>
    

   </>
  );
}
