import React from 'react'

const MovingBorder = () => {
  return (
    <>
    <div className='relative w-full aspect-[1688/896] h-[80vh] overflow-hidden '>

      <svg className="absolute w-0 h-0">
          <clipPath id="myClipPath" clipPathUnits="objectBoundingBox">
            <path
              // d="M0,0.088 C0,0.068,0.008,0.052,0.018,0.052 H0.38 C0.394,0.052,0.408,0.041,0.418,0.021 V0.021 C0.426,0.008,0.435,0,0.445,0 H0.555 C0.565,0,0.576,0.007,0.584,0.021 V0.021 C0.596,0.041,0.611,0.052,0.626,0.052 H0.982 C0.992,0.052,1,0.068,1,0.088 V1 H0.888,0"
              d="M0,0 L0.142,0 A0.043,0.062,0,0,1,0.158,0.004 L0.192,0.024 A0.043,0.062,0,0,0,0.208,0.029 L0.792,0.029 A0.043,0.062,0,0,0,0.808,0.024 L0.842,0.004 A0.043,0.062,0,0,1,0.858,0 L1,0 L1,1 L0,1 L0,0"

              transform="scale(1,1)"
            />
          </clipPath>
        </svg>

        <div className="absolute inset-0 bg-red-400 [clip-path:url(#myClipPath)]"></div>
    </div>
    </>
  )

}

export default MovingBorder