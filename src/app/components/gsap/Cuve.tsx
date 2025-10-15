"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(useGSAP, DrawSVGPlugin, Observer);

interface StageData {
    title: string;
    description: string;
    stageId: string
}

interface AnimatedPathwayProps {
    stages?: StageData[];
    pathColor?: string;
    highlightColor?: string;
    backgroundColor?: string;
}

const defaultStages: StageData[] = [
    {
        stageId: "001",
        title: "Discovery",
        description: "Understanding your vision, mapping requirements, and architecting the foundation for scalable solutions."
    },
    {
        stageId: "002",
        title: "Development",
        description: "Building with purpose. Writing clean code, integrating AI capabilities, and crafting user experiences that drive engagement."
    },
    {
        stageId: "003",
        title: "Deployment",
        description: "Going live with confidence. Testing rigorously, optimizing performance, and ensuring seamless delivery across platforms."
    },
    {
        stageId: "004",
        title: "Evolution",
        description: "Continuous improvement. Monitoring analytics, gathering feedback, scaling infrastructure, and innovating for tomorrow's challenges."
    }

];

export default function AnimatedPathway({
    stages = defaultStages,
    pathColor = "#44403c",
    highlightColor = "#ff7700",
    backgroundColor = "black",
}: AnimatedPathwayProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathHighlightRef = useRef<SVGPathElement>(null);
    const stageRefs = useRef<(HTMLDivElement | null)[]>([]);
    const stageAnimations = useRef<gsap.core.Timeline[]>([]);
    const currentStageRef = useRef<number | undefined>(undefined);

    const positions = ["0% 22%", "21% 43%", "43% 68%", "69% 100%"];

    useGSAP(
        () => {
            if (!pathHighlightRef.current) return;

            // Initial setup
            gsap.set(pathHighlightRef.current, { drawSVG: "0% 25%" });

            // Main timeline animation
            const mainTimeline = gsap
                .timeline()
                .to("#path-highlight", { opacity: 0, duration: 0.3 })


                .from("#path-full, #path-highlight", {
                    opacity: 1,
                    attr: {
                        d: "M0 0C345.0295 0 681.3966 0 944.1813 0L913-23 913 23 942 0",
                    },
                })
                .to(pathHighlightRef.current, { drawSVG: "69% 100%", duration: 1 }, "+=0.5")
                .to(pathHighlightRef.current, { drawSVG: "0% 21%", duration: 1 }, "+=0.5");

            // Create animations for each stage
            stageRefs.current.forEach((stage, index) => {
                if (!stage) return;

                const tl = gsap.timeline({
                    defaults: { ease: "power1.inOut" },
                    paused: true,
                });

                const headings = stage.querySelector(".headings") as HTMLElement;
                const description = stage.querySelector("p") as HTMLElement;

                if (headings && description) {
                    tl.to(headings, { yPercent: -55 }).from(
                        description,
                        { y: 10, opacity: 0 },
                        0
                    );
                }

                stageAnimations.current[index] = tl;
            });

            // Observer for pointer/touch movement
            let minX = window.innerWidth * 0.1;
            let maxX = window.innerWidth - minX;

            const updateValues = () => {
                minX = window.innerWidth * 0.1;
                maxX = window.innerWidth - minX;
            };

            const handlePointer = (x: number) => {
                const clamped = gsap.utils.clamp(minX, maxX, x);
                const normalized = gsap.utils.normalize(minX, maxX, clamped);
                const stage = Math.floor(
                    normalized === 1 ? 0.999999 * stages.length : normalized * stages.length
                );

                if (stage !== currentStageRef.current) {
                    // Reverse previous stage animation
                    if (currentStageRef.current !== undefined) {
                        stageAnimations.current[currentStageRef.current]?.reverse();
                    }

                    // Highlight new stage
                    if (pathHighlightRef.current && positions[stage]) {
                        gsap.to(pathHighlightRef.current, { drawSVG: positions[stage] });
                    }
                    stageAnimations.current[stage]?.play();
                    currentStageRef.current = stage;
                }
            };

            const observer = Observer.create({
                target: window,
                type: "pointer,touch",
                onMove: (self) => {
                    if (typeof self.x === "number") {
                        handlePointer(self.x);
                    }
                },
            });

            const handleResize = () => {
                updateValues();
            };

            window.addEventListener("resize", handleResize);

            return () => {
                observer.kill();
                window.removeEventListener("resize", handleResize);
            };
        },
        { scope: containerRef }
    );

    return (
        <div ref={containerRef} className="w-full">
            {/* SVG Path */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-10 -450 1050 550"
                width="100%"
                height="auto"
                preserveAspectRatio="xMidYMid meet"
                style={{ maxWidth: "100%", height: "auto", backgroundColor }}
            >
                <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path
                        id="path-full"
                        d="M0 0C345.0295 9.6305 681.3966-108.8867 944.1813-332.6773L906-326 933-301 944-332"
                        stroke={pathColor}
                        strokeWidth="19"
                    />
                    <path
                        id="path-highlight"
                        ref={pathHighlightRef}
                        d="M0 0C345.0295 9.6305 681.3966-108.8867 944.1813-332.6773L906-326 933-301 944-332"
                        stroke={highlightColor}
                        strokeWidth="19"
                    />
                </g>
            </svg>

            {/* Stages */}
            <div className="flex  w-full  justify-between bg-black  ">
                {stages.map((stage, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            stageRefs.current[index] = el;
                        }}
                        className="stage  space-y-3 py-2 px-2 "
                    >
                        <div className="font-semibold text-xl"> {stage.stageId}</div>
                        <div className="heading overflow-hidden h-[25px]">
                            <div className="headings text-[20px]">
                                <span>{stage.title}</span>
                                <span className="block text-chart-3">{stage.title}</span>
                            </div>
                        </div>
                        <div className="w-full text-sm">
                            <p>{stage.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
