import React from 'react'
import Content, { Nav, SocialLinks } from './Content';
import MobileFooter from './MobileFooter';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <div className='bg-chart-3 max-md:hidden'>


        <DesktopFooter />


      </div>
      <div>
        <MobileFooter />
      </div>
    </>




  )
}

const DesktopFooter = () => {
  return (
    <div

      className='relative h-[90vh]'

      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}

    >
      <div className='fixed bottom-0  bg-contain box-content flex justify-center items-center  h-[90vh] w-full'>
      
        {/* <Content />  */}
        <div className='absolute   overflow-clip p-5 border-2  z-50 h-[85%] w-[85%] rounded-4xl  flex flex-col justify-between'>
          <div className=' flex'>
            <div className='h-full w-[45%]   text-5xl font-bold'>
              <div className='w-full h-full'>
                <h1>

                  SEA<span className='text-chart-3'>SMARTZ</span>
                  </h1>
                </div>
            
              </div>
            <div className='h-full w-full '><Nav /></div>
          </div>
          <div className=''><SocialLinks /></div>


        </div>
        <div className='h-full w-full bg-[url(/logos/ftf1.png)] bg-cover flex relative'>
          {/* <div className="h-full w-full bg-[url(/logos/fl1.png)] bg-cover"></div>
          <div className="h-full w-full bg-[url(/logos/fr1.png)] bg-cover"></div> */}
        </div>

      </div>
    </div>

  )
}