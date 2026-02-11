import React from 'react'
import Button from './Button'
import img from '../assets/forBg.jpg'

const Exclusive = () => {
  return (
    <section className='relative w-full h-[166px]   '
        style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              
            }}
    >
        <div className="absolute inset-0 bg-black/25 py-[57px]">
             <div className='w-[989px] flex gap-8  mx-auto'>
            <div>
                <h3 className=" text-[32px] leading-[48px] tracking-[0.46%] font-medium text-[#FFFFFF] mb-4 " >Exlusive Member - plus 8% reward and free shipping</h3>
            </div>
            <div>
                <Button text={"SHOP NOW"} primary= {false} />
            </div>
        </div>
        </div>
       
    </section>
  )
}

export default Exclusive