import React from 'react'
import Button from './Button'
const Banner = () => {
  return (
    <div className=" container ">
        <div
          className="  h-180 bg-cover mb-[47px]
                        pt-[160px] pr-[547px] pb-[218px] pl-[109px]"
          style={{
            backgroundImage: "url('../src/assets/background_image.png')",
          }}
        >
          <div className="w-[624px] h-[342px] text-[#222222]">
            <h3 className="text-[64px] font-medium leading-[85px] tracking-[0.46px] mb-[20px]">
              Fresh Looks for Warmer Days
            </h3>

            <p className="text-[20px] font-normal leading-[30px] mb-[40px]">
              Unveil bold layers and timeless silhouettes — designed to define
              your Spring/Summer 2027 look.
            </p>

            {/* Buttons */}
            <div className="flex gap-5.25">
              <Button text="DISCOVER COLLECTION" />
              <Button text="SHOW ME" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Banner