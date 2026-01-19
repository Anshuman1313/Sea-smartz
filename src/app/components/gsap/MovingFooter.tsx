"use client"
import React from 'react'
import {motion} from 'motion/react'
const MovingFooter = () => {
  return (
    <div className='w-full flex flex-wrap p-20 bg-red-600'>
        {
            Array.from({length: 33}).map((_,i)=>(
                <motion.div key={i} className='border-1 rounded-[10px] border-stone-400 w-30 h-50'
                whileHover={{

                        backgroundColor: "#fca5a5",
                      
                }}
                exit={{
                    transition:{ duration: 2, ease: "circOut"}
                }}
                transition={{
                    duration: 1,
                    ease: "easeInOut"
                    
                }}
                >

                </motion.div>
            ))
        }
    </div>
  )
}

export default MovingFooter