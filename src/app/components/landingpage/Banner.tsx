import { CircleUser, Contact, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Banner = () => {
  return (
    <div className='w-full py-2 gap-4 font-semibold px-2  text-base flex items-center justify-center  md:justify-end bg-chart-3 z-20 text-foreground'>
       <div className="bg-chart-3 px-2 py-2 font-sans text-xs font-medium tracking-tight text-foreground sm:px-4   sm:text-sm md:text-right flex flex-row md:justify-end md:items-center gap-2">
            <span className='flex items-center justify-around'> 
              <Mail className='size-[18px] mx-1 '/> 
              <Link href="mailto:sales@seasmartz.com" className="underline hover:text-gray-200">sales@seasmartz.com</Link></span>
            <span className="hidden md:inline-block">|</span>
            <span className='flex items-center justify-around'> <CircleUser className='size-[18px] mx-1  '/>  <Link href="tel:9056641707" className="underline hover:text-gray-200">+91 90566-41707</Link></span>
           
        </div>
    </div>
  )
}

