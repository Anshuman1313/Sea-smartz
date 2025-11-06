import React from 'react'
import Content from './Content';
import MobileFooter from './MobileFooter';

export default function Footer() {
  return (
    <>
    <div className='bg-chart-3 max-md:hidden'>
     
     
      <DesktopFooter />
      

    </div>
    <div>
       <MobileFooter/>
    </div>
</>


     
    
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