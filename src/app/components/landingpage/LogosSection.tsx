import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, scale } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LogoSection() {
  const HeadingRef = useRef<HTMLDivElement>(null)
  const SubHeadingRef = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    // Split once and store for cleanup
    const splitHeading = new SplitText(HeadingRef.current, { type: "chars" });
    const splitSub = new SplitText(SubHeadingRef.current, { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: HeadingRef.current,
        start: "top 85%",
        end: "top 60%",
        toggleActions: "play none none reverse", // cleaner than scrub for this use
        // markers: true,
      },
    });

    timeline
      .from(splitHeading.chars, {
        y: 30,
        opacity: 0,
        stagger: 0.04,
        ease: "back.out(1.7)",
        duration: 0.8,
      })
      .from(
        splitSub.words,
        {
          x: 20,
          opacity: 0,
          stagger: 0.05,
          ease: "power3.out",
          duration: 0.7,
        },
        "-=0.3" // overlap
      );

    // 🧹 Cleanup on unmount
    return () => {
      timeline.kill();
      splitHeading.revert();
      splitSub.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <>
    <div className="flex flex-col text-center justify-center items-center font-sans gap-5 mt-30">
      <h1 className="text-6xl  max-md:text-4xl text-foreground font-semibold" ref={HeadingRef}>Trusted by Leading
        <span> Brands</span> </h1>
      <h3 className="text-2xl max-md:text-sm " ref={SubHeadingRef}>Our partners and clients who rely on SeaSmartz for innovative IT solutions and digital growth.</h3>


      <DynamicLogoGrid />



      <DynamicLogoGridMobile />


    </div>
  </>
}

export function DynamicLogoGridMobile(
  {
    width = 1400,
    height = 600,
    gridStroke = "#ffffff26",
    gridStrokeWidth = 1,
    rectFill = "none",
    rectStroke = "rgb(0,0,0)",
    logoSize = 100,
  }: {
    width?: number;
    height?: number;
    logos?: string[];
    gridStroke?: string;
    gridStrokeWidth?: number;
    rectFill?: string;
    rectStroke?: string;
    logoSize?: number;
  }
) {
  const rectangles = [
    { x: 205, y: 205, width: 190, height: 190 },
    { x: 405, y: 205, width: 190, height: 190 },
    { x: 205, y: 405, width: 190, height: 190 },
    { x: 405, y: 405, width: 190, height: 190 },
    { x: 205, y: 605, width: 190, height: 190 },
    { x: 405, y: 605, width: 190, height: 190 },
  ];

  const allLogos = [
    "logos/max.svg",
    "logos/leap.svg",
    "logos/resend.svg",
    "logos/strapi-full-logo-dark.svg",
    "logos/fal.svg",
    "logos/sumo.svg",
    "logos/upstash.svg",
    "logos/anghami.svg",
    "logos/durable.svg",
  ];
    const [currentLogos, setCurrentLogos] = useState<string[]>([]);

  //  Helper function to get 5 unique random logos
  const getUniqueRandomLogos = (count: number) => {
    const shuffled = [...allLogos].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };
  useEffect(() => {
    const initialLogos = getUniqueRandomLogos(rectangles.length);
    setCurrentLogos(initialLogos);
  }, []);

  //  Change logos every 3 seconds (ensuring no duplicates)
  useEffect(() => {
    if (currentLogos.length === 0) return;

    const interval = setInterval(() => {
      const newUniqueLogos = getUniqueRandomLogos(rectangles.length);
      setCurrentLogos(newUniqueLogos);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentLogos.length]);
  return (
    <svg
      viewBox="0 0 800 900"
      width="auto"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      className="md:hidden scale-160"

    >
      {/* ===== Define Mask ===== */}
      <defs>
        {/* Radial gradient for center fade */}
        <radialGradient id="fadeGradientMobile" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="60%" stopColor="white" stopOpacity="1" />
          <stop offset="85%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>

        {/* Mask using the radial gradient */}
        <mask id="fadeMaskMobile">
          <rect width="800" height="900" fill="url(#fadeGradientMobile)" />
        </mask>
      </defs>

      <g mask="url(#fadeMaskMobile)">
        {/* Grid lines */}
        <path
          d="M100 200H700M100 400H700M200 150V850M396 150V850M600 150V850M100 600H700M100 800H700"
          stroke={gridStroke}
          strokeWidth={gridStrokeWidth}
          fill="none"

        />

        {/* Rectangles */}
        {rectangles.map((rect, idx) => (
          <rect
            key={idx}
            x={rect.x}
            y={rect.y}
            width={rect.width}
            height={rect.height}
            style={{ fill: rectFill, stroke: rectStroke }}
          />
        ))}

        {/* Logos with Framer Motion hover effects */}
        {rectangles.map((rect, idx) => {
          const logo = currentLogos[idx];
          const x = rect.x + rect.width / 2 - logoSize / 2;
          const y = rect.y + rect.height / 2 - logoSize / 2;

          return (
            <motion.g
              key={idx}
              initial={{ scale: 1.2, stroke: "none" }}
              whileHover={{
                scale: 1.4,
                stroke: "#ff7700"
              }}
            >
              <rect
                x={rect.x}
                y={rect.y}
                width={rect.width}
                height={rect.height}
                rx={10}
                ry={10}
                fill="transparent"
              />

              <AnimatePresence mode="wait">
                {logo && (
                  <motion.image
                    key={logo}
                    href={logo}
                    x={x}
                    y={y}
                    width={logoSize}
                    height={logoSize}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </AnimatePresence>
            </motion.g>
          );
        })}
      </g>
    </svg>
  );

}



export function DynamicLogoGrid({
  width = 1400,
  height = 600,
  gridStroke = "#ffffff26",
  gridStrokeWidth = 1,
  rectFill = "none",
  rectStroke = "rgb(0,0,0)",
  logoSize = 100,
}: {
  width?: number;
  height?: number;
  logos?: string[];
  gridStroke?: string;
  gridStrokeWidth?: number;
  rectFill?: string;
  rectStroke?: string;
  logoSize?: number;
}) {
  const rectangles = [
    { x: 205, y: 205, width: 190, height: 190 },
    { x: 405, y: 205, width: 190, height: 190 },
    { x: 605, y: 205, width: 190, height: 190 },
    { x: 805, y: 205, width: 190, height: 190 },
    { x: 1005, y: 205, width: 190, height: 190 },
  ];

  const allLogos = [
    "logos/max.svg",
    "logos/leap.svg",
    "logos/resend.svg",
    "logos/strapi-full-logo-dark.svg",
    "logos/fal.svg",
    "logos/sumo.svg",
    "logos/upstash.svg",
    "logos/anghami.svg",
    "logos/durable.svg",
  ];

  const [currentLogos, setCurrentLogos] = useState<string[]>([]);

  //  Helper function to get 5 unique random logos
  const getUniqueRandomLogos = (count: number) => {
    const shuffled = [...allLogos].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  //  Initialize with 5 unique logos
  useEffect(() => {
    const initialLogos = getUniqueRandomLogos(rectangles.length);
    setCurrentLogos(initialLogos);
  }, []);

  //  Change logos every 3 seconds (ensuring no duplicates)
  useEffect(() => {
    if (currentLogos.length === 0) return;

    const interval = setInterval(() => {
      const newUniqueLogos = getUniqueRandomLogos(rectangles.length);
      setCurrentLogos(newUniqueLogos);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentLogos.length]);

  return (
    <svg
      viewBox="0 0 1400 600"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      className="max-w-full max-md:hidden"
    >
      {/* ===== Define Mask ===== */}
      <defs>
        <radialGradient id="fadeGradient" cx="50%" cy="50%" r="48%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="70%" stopColor="white" stopOpacity="1" />
          <stop offset="95%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="black" stopOpacity="0" />
        </radialGradient>

        <mask id="fadeMask">
          <rect width={width} height={height} fill="url(#fadeGradient)" />
        </mask>
      </defs>

      <g mask="url(#fadeMask)">
        {/* Grid lines */}
        <path
          d="M50 200H1350 M50 400H1350 M200 50V550 M400 50V550 M600 50V550 M800 50V550 M1000 50V550 M1200 50V550"
          stroke={gridStroke}
          strokeWidth={gridStrokeWidth}
          fill="none"
        />

        {/* Rectangles */}
        {rectangles.map((rect, idx) => (
          <rect
            key={idx}
            x={rect.x}
            y={rect.y}
            width={rect.width}
            height={rect.height}
            style={{ fill: rectFill, stroke: rectStroke }}
          />
        ))}

        {/* Logos with Framer Motion hover effects */}
        {rectangles.map((rect, idx) => {
          const logo = currentLogos[idx];
          const x = rect.x + rect.width / 2 - logoSize / 2;
          const y = rect.y + rect.height / 2 - logoSize / 2;

          return (
            <motion.g
              key={idx}
              initial={{ scale: 1.2, stroke: "none" }}
              whileHover={{
                scale: 1.4,
                stroke: "#ff7700"
              }}
            >
              <rect
                x={rect.x}
                y={rect.y}
                width={rect.width}
                height={rect.height}
                rx={10}
                ry={10}
                fill="transparent"
              />

              <AnimatePresence mode="wait">
                {logo && (
                  <motion.image
                    key={logo}
                    href={logo}
                    x={x}
                    y={y}
                    width={logoSize}
                    height={logoSize}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </AnimatePresence>
            </motion.g>
          );
        })}
      </g>
    </svg>
  );
}

