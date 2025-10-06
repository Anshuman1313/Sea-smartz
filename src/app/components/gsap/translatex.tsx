"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapExample() {
    const boxRef = useRef<HTMLDivElement>(null);
    

    useGSAP(() => {
        if (boxRef.current) {
            gsap.to(boxRef.current, {
                x: 200,
                rotation: 360,
                duration: 2,
                yoyo: true,
                repeat: -1,
                ease: "power2.inOut",
            });
        }
    }, []);
    useGSAP(() => {

        gsap.to('.box', {
            scrollTrigger: '.box', // start animation when ".box" enters the viewport
            x: 500,
            yoyo: true
        });
    })


    return (
        <div className="flex justify-center mt-10" >
            <div  className="opacity-0 mt-40 bg-green-600 w-64 h-64 flex items-center justify-center">
                Scroll-triggered box animation
            </div>
            <div
                ref={boxRef}
                className="w-16 h-16 bg-green-500 rounded-lg"
            ></div>
            <div className="box w-16 h-16 bg-blue-500 rounded-lg ml-10 flex items-center justify-center">
                Hi
            </div>
        </div>
    );
}
