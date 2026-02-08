import React from 'react'
import About from '../assets/aboutme.jpg'

const AboutUs = () => {
  return (
    <section>
        <div className=' w-full h-159.5 bg-grayBg mt-11 '>
            <div className='flex'>
                <div className=' w-[50%] h-159.5'>
                    <div className='w-[499px] mx-auto pt-[155px] text-left items-center'>
                        <h4 className=' text-gray75 text-[18px] leading-[27px] font-normal mb-2 '>About Us</h4>
                        <h3 className=' text-black222 text-[40px] leading-[55px] font-medium tracking-[0.46%] mb-4'>Designed to Empower, Crafted to Last</h3>
                        <p className=' text-gray75 text-[18px] leading-[27px] font-normal  mb-[30px]'>At Modevo, we blend timeless design with modern flair — creating pieces that inspire confidence, celebrate individuality, and redefine everyday elegance. From detail to silhouette, every piece tells a story of quality and character.</p>
                        <button className='w-[162px] h-[52px] px-[22px] py-2.5 border-2 border-black222'><a className=' text-black222 text-[16px] leading-[23px] font-medium ' href="#">EXPLORE MORE</a></button>
                    </div>
                </div>
                <div>
                    <img src={About} alt="" className=' w-[720px] h-[634px] ' />

                </div>
            </div>

        </div>
    </section>

  )
}

export default AboutUs