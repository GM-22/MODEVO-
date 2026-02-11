import React from 'react'
import left from '../assets/leftImage.jpg'
import right from '../assets/rightImage.jpg'
import Button from './Button'
const FreshLooks = () => {
  return (
    <section className=' py-[78px]  '>
        <div className='relative '>
            <div className='mx-auto flex w-[1280px] h-[556px] '>
                <div className=' w-[640px] h-[560px] '>
                    <img className= ' w-full h-full object-cover ' src={left} alt="" />
                </div>
                <div className=' w-[640px] h-[560px] '> 
                    <img className= ' w-full h-full object-cover ' src={right} alt="" />
                </div>
            </div>
            <div className=' w-[1280px] h-[560px] text-center  left-78 top-0 absolute bg-black/40 py-[100px]'>
                <div className=' w-[597px] h-[360px] m-auto text-center items-center '>
                    <h3 className=" text-[64px] leading-[80px] tracking-[0.46%] font-medium text-[#FFFFFF] mb-5 " >Fresh Looks for Sunny Days</h3>
                    <p className=" text-[20px] leading-[30px] tracking-[0.46%] font-normal text-[#FFFFFF] mb-10 " >From breezy suits to playful sets — this season is all about feeling good and looking better. Step into Spring/Summer with pieces that radiate confidence, color, and comfort.</p>
                    <div className='ml-50'><Button text={'SHOP NOW'} primary={false} /></div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default FreshLooks