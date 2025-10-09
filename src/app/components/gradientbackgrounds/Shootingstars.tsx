"use client"
import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";

const Shootingstars = () => {
     const pathRef = useRef<SVGPathElement>(null);
  const progress = useMotionValue(0);

  // Compute x,y for head position along path
  const x = useTransform(progress, (v) => {
    const path = pathRef.current;
    if (!path) return 0;
    const length = path.getTotalLength();
    return path.getPointAtLength(v * length).x;
  });

  const y = useTransform(progress, (v) => {
    const path = pathRef.current;
    if (!path) return 0;
    const length = path.getTotalLength();
    return path.getPointAtLength(v * length).y;
  });

  // Animate 0 → 1 → 0 continuously
  useAnimationFrame((t) => {
    const cycle = (t / 2000) % 1; // 2s duration
    progress.set(cycle);
  });

  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560" className='absolute top-0'>
    <g clip-path="url(&quot;#SvgjsClipPath1576&quot;)" fill="none">
      
        <motion.circle 
           r="1"
      fill="#ffffff"
      filter="drop-shadow(0 0 4px #ffffff)"
      initial={{ cx: 966.18, cy: 180.18 }}
      animate={{ cx: 1068, cy: 282 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
        />

        
        <line x1="507.46" y1="206.46" x2="581" y2="280" stroke="url(#SvgjsLinearGradient1578)" stroke-width="1.04" stroke-linecap="round" filter="drop-shadow(0 0 2.6px #ffffff)"></line>
        <circle r="0.975" cx="581" cy="280" fill="#ffffff" filter="drop-shadow(0 0 4px #ffffff)"></circle>
        <line x1="750.42" y1="263.42" x2="848" y2="361" stroke="url(#SvgjsLinearGradient1579)" stroke-width="2" stroke-linecap="round" filter="drop-shadow(0 0 5px #ffffff)"></line>
        <circle r="1.875" cx="848" cy="361" fill="#ffffff" filter="drop-shadow(0 0 4px #ffffff)"></circle>
        <line x1="560.48" y1="89.48" x2="622" y2="151" stroke="url(#SvgjsLinearGradient1580)" stroke-width="1.84" stroke-linecap="round" filter="drop-shadow(0 0 4.6px #ffffff)"></line>
        <circle r="1.725" cx="622" cy="151" fill="#ffffff" filter="drop-shadow(0 0 4px #ffffff)"></circle>
        <line x1="354.05" y1="324.05" x2="429" y2="399" stroke="url(#SvgjsLinearGradient1581)" stroke-width="2.32" stroke-linecap="round" filter="drop-shadow(0 0 5.8px #ffffff)"></line>
        <circle r="2.175" cx="429" cy="399" fill="#ffffff" filter="drop-shadow(0 0 4px #ffffff)"></circle>
        <line x1="1052.85" y1="270.85" x2="1137" y2="355" stroke="url(#SvgjsLinearGradient1582)" stroke-width="1.28" stroke-linecap="round" filter="drop-shadow(0 0 3.2px #ffffff)"></line>
        <circle r="1.2" cx="1137" cy="355" fill="#ffffff" filter="drop-shadow(0 0 4px #ffffff)"></circle>
        <line x1="273.95" y1="-89.05" x2="368" y2="5" stroke="url(#SvgjsLinearGradient1583)" stroke-width="1.28" stroke-linecap="round" filter="drop-shadow(0 0 3.2px #ffffff)"></line>
        <circle r="1.2" cx="368" cy="5" fill="#ffffff" filter="drop-shadow(0 0 4px #ffffff)"></circle>
        <line x1="437.39" y1="22.39" x2="518" y2="103" stroke="url(#SvgjsLinearGradient1584)" stroke-width="0.88" stroke-linecap="round" filter="drop-shadow(0 0 2.2px #ffffff)"></line>
        <circle r="0.825" cx="518" cy="103" fill="#ffffff" filter="drop-shadow(0 0 4px #ffffff)"></circle>
        <line x1="628.9" y1="429.9" x2="689" y2="490" stroke="url(#SvgjsLinearGradient1585)" stroke-width="1.68" stroke-linecap="round" filter="drop-shadow(0 0 4.2px #ffffff)"></line>
        <circle r="1.575" cx="689" cy="490" fill="#ffffff" filter="drop-shadow(0 0 4px #ffffff)"></circle>
        <line x1="30.68" y1="-5.32" x2="112" y2="76" stroke="url(#SvgjsLinearGradient1586)" stroke-width="1.36" stroke-linecap="round" filter="drop-shadow(0 0 3.4px #ffffff)"></line>
        <circle r="1.275" cx="112" cy="76" fill="#ffffff" filter="drop-shadow(0 0 4px #ffffff)"></circle>
        <line x1="997.41" y1="302.41" x2="1066" y2="371" stroke="url(#SvgjsLinearGradient1587)" stroke-width="1.6" stroke-linecap="round" filter="drop-shadow(0 0 4px #ffffff)"></line>
        <circle r="1.5" cx="1066" cy="371" fill="#ffffff" filter="drop-shadow(0 0 4px #ffffff)"></circle>
        <line x1="843.35" y1="183.35" x2="948" y2="288" stroke="url(#SvgjsLinearGradient1588)" stroke-width="2" stroke-linecap="round" filter="drop-shadow(0 0 5px #ffffff)"></line>
        <circle r="1.875" cx="948" cy="288" fill="#ffffff" filter="drop-shadow(0 0 4px #ffffff)"></circle>
        <line x1="292.71" y1="91.71" x2="391" y2="190" stroke="url(#SvgjsLinearGradient1589)" stroke-width="2.32" stroke-linecap="round" filter="drop-shadow(0 0 5.8px #ffffff)"></line>
        <circle r="2.175" cx="391" cy="190" fill="#ffffff" filter="drop-shadow(0 0 4px #ffffff)"></circle>
        <line x1="303.15" y1="140.15" x2="388" y2="225" stroke="url(#SvgjsLinearGradient1590)" stroke-width="2.32" stroke-linecap="round" filter="drop-shadow(0 0 5.8px #ffffff)"></line>
        <circle r="2.175" cx="388" cy="225" fill="#ffffff" filter="drop-shadow(0 0 4px #ffffff)"></circle>
        <line x1="1229.55" y1="239.55" x2="1284" y2="294" stroke="url(#SvgjsLinearGradient1591)" stroke-width="1.76" stroke-linecap="round" filter="drop-shadow(0 0 4.4px #ffffff)"></line>
        <circle r="1.65" cx="1284" cy="294" fill="#ffffff" filter="drop-shadow(0 0 4px #ffffff)"></circle>
        <line x1="1223.92" y1="111.92" x2="1272" y2="160" stroke="url(#SvgjsLinearGradient1592)" stroke-width="0.96" stroke-linecap="round" filter="drop-shadow(0 0 2.4px #ffffff)"></line>
        <circle r="0.9" cx="1272" cy="160" fill="#ffffff" filter="drop-shadow(0 0 4px #ffffff)"></circle>
    </g>
     

  


    <defs>
        <clipPath id="SvgjsClipPath1576">
            <rect width="1440" height="560" x="0" y="0"></rect>
        </clipPath>
         
        <linearGradient x1="1068" y1="282" x2="966.18" y2="180.18" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1577">
            <stop stop-opacity="1" stop-color="#ffffff" offset="0"></stop>
            <stop stop-opacity="0.3" stop-color="#ffffff" offset="0.7"></stop>
            <stop stop-opacity="0" stop-color="#ffffff" offset="1"></stop>
        </linearGradient>
        <linearGradient x1="581" y1="280" x2="507.46" y2="206.46" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1578">
            <stop stop-opacity="1" stop-color="#ffffff" offset="0"></stop>
            <stop stop-opacity="0.3" stop-color="#ffffff" offset="0.7"></stop>
            <stop stop-opacity="0" stop-color="#ffffff" offset="1"></stop>
        </linearGradient>
        <linearGradient x1="848" y1="361" x2="750.42" y2="263.42" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1579">
            <stop stop-opacity="1" stop-color="#ffffff" offset="0"></stop>
            <stop stop-opacity="0.3" stop-color="#ffffff" offset="0.7"></stop>
            <stop stop-opacity="0" stop-color="#ffffff" offset="1"></stop>
        </linearGradient>
        <linearGradient x1="622" y1="151" x2="560.48" y2="89.48" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1580">
            <stop stop-opacity="1" stop-color="#ffffff" offset="0"></stop>
            <stop stop-opacity="0.3" stop-color="#ffffff" offset="0.7"></stop>
            <stop stop-opacity="0" stop-color="#ffffff" offset="1"></stop>
        </linearGradient>
        <linearGradient x1="429" y1="399" x2="354.05" y2="324.05" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1581">
            <stop stop-opacity="1" stop-color="#ffffff" offset="0"></stop>
            <stop stop-opacity="0.3" stop-color="#ffffff" offset="0.7"></stop>
            <stop stop-opacity="0" stop-color="#ffffff" offset="1"></stop>
        </linearGradient>
        <linearGradient x1="1137" y1="355" x2="1052.85" y2="270.85" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1582">
            <stop stop-opacity="1" stop-color="#ffffff" offset="0"></stop>
            <stop stop-opacity="0.3" stop-color="#ffffff" offset="0.7"></stop>
            <stop stop-opacity="0" stop-color="#ffffff" offset="1"></stop>
        </linearGradient>
        <linearGradient x1="368" y1="5" x2="273.95" y2="-89.05" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1583">
            <stop stop-opacity="1" stop-color="#ffffff" offset="0"></stop>
            <stop stop-opacity="0.3" stop-color="#ffffff" offset="0.7"></stop>
            <stop stop-opacity="0" stop-color="#ffffff" offset="1"></stop>
        </linearGradient>
        <linearGradient x1="518" y1="103" x2="437.39" y2="22.39" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1584">
            <stop stop-opacity="1" stop-color="#ffffff" offset="0"></stop>
            <stop stop-opacity="0.3" stop-color="#ffffff" offset="0.7"></stop>
            <stop stop-opacity="0" stop-color="#ffffff" offset="1"></stop>
        </linearGradient>
        <linearGradient x1="689" y1="490" x2="628.9" y2="429.9" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1585">
            <stop stop-opacity="1" stop-color="#ffffff" offset="0"></stop>
            <stop stop-opacity="0.3" stop-color="#ffffff" offset="0.7"></stop>
            <stop stop-opacity="0" stop-color="#ffffff" offset="1"></stop>
        </linearGradient>
        <linearGradient x1="112" y1="76" x2="30.68" y2="-5.32" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1586">
            <stop stop-opacity="1" stop-color="#ffffff" offset="0"></stop>
            <stop stop-opacity="0.3" stop-color="#ffffff" offset="0.7"></stop>
            <stop stop-opacity="0" stop-color="#ffffff" offset="1"></stop>
        </linearGradient>
        <linearGradient x1="1066" y1="371" x2="997.41" y2="302.41" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1587">
            <stop stop-opacity="1" stop-color="#ffffff" offset="0"></stop>
            <stop stop-opacity="0.3" stop-color="#ffffff" offset="0.7"></stop>
            <stop stop-opacity="0" stop-color="#ffffff" offset="1"></stop>
        </linearGradient>
        <linearGradient x1="948" y1="288" x2="843.35" y2="183.35" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1588">
            <stop stop-opacity="1" stop-color="#ffffff" offset="0"></stop>
            <stop stop-opacity="0.3" stop-color="#ffffff" offset="0.7"></stop>
            <stop stop-opacity="0" stop-color="#ffffff" offset="1"></stop>
        </linearGradient>
        <linearGradient x1="391" y1="190" x2="292.71" y2="91.71" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1589">
            <stop stop-opacity="1" stop-color="#ffffff" offset="0"></stop>
            <stop stop-opacity="0.3" stop-color="#ffffff" offset="0.7"></stop>
            <stop stop-opacity="0" stop-color="#ffffff" offset="1"></stop>
        </linearGradient>
        <linearGradient x1="388" y1="225" x2="303.15" y2="140.15" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1590">
            <stop stop-opacity="1" stop-color="#ffffff" offset="0"></stop>
            <stop stop-opacity="0.3" stop-color="#ffffff" offset="0.7"></stop>
            <stop stop-opacity="0" stop-color="#ffffff" offset="1"></stop>
        </linearGradient>
        <linearGradient x1="1284" y1="294" x2="1229.55" y2="239.55" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1591">
            <stop stop-opacity="1" stop-color="#ffffff" offset="0"></stop>
            <stop stop-opacity="0.3" stop-color="#ffffff" offset="0.7"></stop>
            <stop stop-opacity="0" stop-color="#ffffff" offset="1"></stop>
        </linearGradient>
        <linearGradient x1="1272" y1="160" x2="1223.92" y2="111.92" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1592">
            <stop stop-opacity="1" stop-color="#ffffff" offset="0"></stop>
            <stop stop-opacity="0.3" stop-color="#ffffff" offset="0.7"></stop>
            <stop stop-opacity="0" stop-color="#ffffff" offset="1"></stop>
        </linearGradient>
    </defs>
</svg>
  )
}

export default Shootingstars
