'use client';
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';


export default function BlurryCursor() {
    const mouse = useRef({x: 0, y: 0});
        const delayedMouse = useRef({x: 0, y: 0});
        const rafId = useRef(0);
    
    const circle = useRef(null);
    const size = 400;

    const lerp = (x:number, y:number, a:number) => x * (1 - a) + y * a;

    
    const manageMouseMove = (e:{clientX:number, clientY:number}) => {
        const { clientX, clientY } = e;
    
        mouse.current = {
            x: clientX,
            y: clientY
        }

    }
       const animate = () => {
        const { x, y } = delayedMouse.current;

        delayedMouse.current = {
            x: lerp(x, mouse.current.x, 0.085),
            y: lerp(y, mouse.current.y, 0.085)
        }

        moveCircle(delayedMouse.current.x, delayedMouse.current.y);
        
        rafId.current = window.requestAnimationFrame(animate);
    }

    const moveCircle = (x:number, y:number) => {
        gsap.set(circle.current, {x, y, xPercent: -50, yPercent: -50})
    }

  useEffect( () => {
          animate();
          window.addEventListener("mousemove", manageMouseMove);
          return () => {
              window.removeEventListener("mousemove", manageMouseMove);
              window.cancelAnimationFrame(rafId.current)
          }
      }, [])

    return (
        <div className='relative h-screen '>
            <div 
                ref={circle}
                style={{
                    width: size,
                    height: size,
                }}
                className='top-0 left-0 fixed rounded-full z-200 bg-radial from-pink-500 from-30% to-gray-100' 
            />
        </div>
    )
}