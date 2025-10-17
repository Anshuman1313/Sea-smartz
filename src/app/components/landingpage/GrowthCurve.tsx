"use client"
import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedPathway from '../gsap/Cuve'
import { useRef } from 'react'



const GrowthCurve = () => {
    const CurveTextRef = useRef<HTMLDivElement>(null)
    const MainHeadingRef = useRef<HTMLDivElement>(null)
    const TrajectoryRef = useRef<HTMLDivElement>(null)
    useGSAP(() => {
        if (typeof window === "undefined") return;
        gsap.registerPlugin(ScrollTrigger)
           gsap.from(CurveTextRef.current, {
            scrollTrigger: {
                trigger: CurveTextRef.current,
                start: "top 80%",
                end: "top 50%",
                scrub: 1,
                // markers: true
            },
            opacity: 0,
            x: -50,
            ease: "power2.out"
        })

        // Main heading animation (right side - "The Excellence")
        if (MainHeadingRef.current) {
            const headingChildren = Array.from(MainHeadingRef.current.children);
            gsap.from(headingChildren, {
                scrollTrigger: {
                    trigger: MainHeadingRef.current,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1,
                },
                opacity: 0,
                x: 50,
                stagger: 0.1,
                ease: "power2.out"
            });
        }

        // Trajectory letters animation (staggered)
        if(TrajectoryRef.current){

       
        const trajectoryLetters = TrajectoryRef.current?.querySelectorAll('span');
        gsap.from(trajectoryLetters, {
            scrollTrigger: {
                trigger: TrajectoryRef.current,
                start: "top 70%",
                end: "top 40%",
                scrub: 1,
            },
            opacity: 0,
            y: 20,
            stagger: 0.05,
            ease: "back.out(1.7)"
        })
    }


        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [])

    return (
        <div className='max-w-5xl my-40 relative font-sans'>
            <div className='flex w-full absolute gap-15 '>
                {/* The sub heading */}
                <div className='flex flex-col gap-3 '
                ref= {CurveTextRef}
                >
                    <div className='text-2xl font-medium text-neutral-300'>Building software is easy. Building solutions that transform businesses is what we do. We help companies turn <span className=' font-bold '> Ideas into Impact.</span></div>
                    <div className='flex gap-2 text-sm font-medium '>
                        <div>
                            As businesses scale, most face the same digital roadblocks: outdated systems, fragmented solutions, and technology that holds them back instead of propelling them forward. The knee-jerk reaction is to patch problems with quick fixes, saving "real transformation" for when there's more time and budget.
                        </div>
                        <div>
                            Whether you're a startup with a bold vision, a growing business ready to scale, or an established company modernizing your tech stack, digital transformation is complex. We help companies accelerate their evolution by designing, coding, and shipping solutions that don't just work—they work for you. Not just meeting requirements, but anticipating needs. We turn your business challenges into our technical roadmap.
                        </div>
                    </div>
                </div>
                {/* the main heading */}
                <div className='w-full flex flex-col text-7xl font-sans text-right text-foreground '
                 ref = {MainHeadingRef}
                >
                    <span className=' '> The</span>
                    <span className='text-8xl font-bold  mt-[-11px] '> Excellence </span>
                    <div className='flex flex-col text-2xl  font-bold '
                    ref={TrajectoryRef}
                    >

                        <span className=''>T</span>
                        <span className=''>r</span>
                        <span className=''>a</span>
                        <span className=''>j</span>
                        <span className=''>e</span>
                        <span className=''>c</span>
                        <span className=''>t</span>
                        <span className=''>o</span>
                        <span className=''>r</span>
                        <span className=''>y</span>
                    </div>


                </div>

            </div>

            <div className='flex flex-col mt-13'>
                <AnimatedPathway />
            </div>
        </div>
    )
}

export default GrowthCurve
