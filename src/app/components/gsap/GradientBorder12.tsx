import React from 'react'
import BlurryCursor from './MovingCursor/Cursor'
import BlurryCursor2Delay from './MovingCursor/Cursor2Delay';
import Scene2 from './MovingCursor/Scene2';
import BlurryCursorSection from './MovingCursor/BlurryCursorSection';

const GradientBorder12 = () => {
  const words = ["hi","hi","hi","hi","hi","hi","hi","hi",];

  return (
    < >
      {/* <div className='absolute h-px w-full inset-x-0 bg-red-400 z-110 top-50'></div>
    <div className='absolute h-px w-full inset-x-0 bg-red-400 z-110 top-50 translate-y-4'></div>
    <div className='absolute h-full w-px inset-y-0 bg-blue-400 z-110 left-50 '></div>
    <div className='absolute h-full w-px inset-y-0 bg-blue-400 z-110 left-50 translate-x-4'></div> */}
      <div className='h-screen w-full absolute z-100 bg-neutral-200 hidden '>
        <div className='section-wrapper relative h-full w-full  '>

          <div className="flex flex-wrap justify-center items-center w-full py-5">
            {words.map((word, index) => (
              <div
                key={index}
                className="bg-red-400/80 backdrop-blur-2xl m-px z-210 size-80 
                 flex justify-center items-center text-4xl font-sans text-black/80"
              >
                {word}
              </div>
            ))}
          </div>


          {/* <div className="border-wrapper relative h-40 w-40 bg-red-400 z-110">

        <div className="gradient-wrapper absolute h-full w-full bg-radial-[at_50%_50%] from-pink-500 to-gray-100 from-5% inset-0  top-0 left-0"></div>
        </div> */}


        </div>
        {/* <BlurryCursor /> */}
        
        
      </div>
        <BlurryCursorSection/>
      {/* <Scene2/> */}
    </>
  )
}

export default GradientBorder12
