import React from 'react'
import Content from '../landingpage/Content';
import { div } from 'motion/react-client';

export default function Footer() {
  return (
    
    <div className='bg-chart-3 '>
      <div className='sm:hidden'>
     <Content/>
      </div>
      <div className='max-sm:hidden'>
      <DesktopFooter />
      </div>

    </div>



     
    
  )
}

const DesktopFooter = () => {
  return (
     <div 

      className='relative h-[90vh]'

      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}

    >
       <div className='fixed bottom-0  h-[90vh] w-full'>

        <Content />

      </div>
    </div>
      
      )}