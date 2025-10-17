"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function ScrollComponent() {
  const boxRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // Simple animation
    gsap.to(boxRef.current, {
      x: 500,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top center", // animation starts when top of element hits center of viewport
         // ends when bottom of element hits center of viewport
        scrub: true, // smooth scrubbing
        markers: true, // debug markers (remove in production)
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div ref={boxRef} className="w-24 h-24 bg-blue-500 rounded-lg" />
    </div>
  );
}
