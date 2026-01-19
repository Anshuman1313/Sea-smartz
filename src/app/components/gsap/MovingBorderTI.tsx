"use client"
import React, { useId, useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

interface Props {
    className?: string,
}
const MovingBorderTI = ({ className }: Props) => {



    // down border M0 2.5H20C23 2.5 23 5 25 5H77C80 5 80 2.5 82 2.5H100V50H0V2.5
    const downBorder = "M0,0.053 H0.2 C0.23,0.053,0.23,0.105,0.25,0.105 H0.77 C0.8,0.105,0.8,0.053,0.82,0.053 H1 V1 H0 V0.053"
    // up border M0 2.5H20C23 2.5 23 0 25 0H77C80 0 80 2.5 82 2.5H100V50H0V2.5
    const upBorder = "M0,0.05 H0.2 C0.23,0.05,0.23,0,0.25,0 H0.77 C0.8,0,0.8,0.05,0.82,0.05 H1 V1 H0 V0.05"


    const sectionRef = useRef(null);

    const clipId = useId();
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
        // "start end" → when section top touches bottom of screen
        // "end start" → when section bottom touches top of screen
    });


    const pathValue = useTransform(scrollYProgress, [0, 0.5], [upBorder, downBorder])


    return (
        <>
            <div
                ref={sectionRef}
                className='relative w-full  min-h-screen overflow-hidden '>

                <motion.svg className="absolute w-0 h-0">
                    <clipPath id={clipId} clipPathUnits="objectBoundingBox">
                        <motion.path
                            //  d = {downBorder}
                            // initial = {{
                            //   d: upBorder
                            // }}
                            //  animate = {{
                            //   d: downBorder

                            //  }}
                            //  transition={{
                            //   ease: "easeInOut",
                            //   duration: 2,
                            //   repeat: Infinity,
                            //   repeatType: "mirror"
                            //  }}
                            d={pathValue}


                        />
                    </clipPath>
                </motion.svg>

                <div className={`absolute inset-0 bg-red-400  ${className}`}
                style={{ clipPath: `url(#${clipId})` }}
                ></div>
            </div>
        </>
    )

}

export default MovingBorderTI



