import React from 'react'
import Button from './Button'

const Connected = () => {
  return (
    <section className=' w-full h-[538px] py-[140px] bg-[#F2F2F2]'>
        <div>
            <h3 className=" text-[48px] leading-[70px] tracking-[1%] font-medium text-black222 text-center mb-5 ">Stay Connected with Vereva</h3>
            <p className=" text-[18px] leading-[29px] tracking-[0.46%] font-normal text-black222 text-center mb-[45px] ">Be the first to know about new arrivals, exclusive offers, and style updates — straight to your inbox.</p>
            <form action="#">
                <div className=' w-[503px] h-[60px] flex justify-between items-center mx-auto border border-black pr-1'>
                    <input type="email" placeholder='Enter Your Email Address' className='py-[14px] px-5 text-[16px] leading-[24px] tracking-[0.46%] text-[#A4A4A4] ' />
                    <Button text={"SUBSCRIBE"} />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Connected