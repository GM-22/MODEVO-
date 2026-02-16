import React from 'react'
import coma from '../assets/coma.svg'
import account from '../assets/account.svg'
const Testimonial = () => {
  return (
    <section className=' h-[676px] py-[84px]'>
        <div className=' container'>
            <div> 
                <h4 className=" text-[18px] leading-[27px] font-normal text-gray75  ">
                Testimonial
                </h4>
                <h3 className=" text-[40px] leading-[60px] tracking-[0.46%] font-medium text-black222 mb-12 ">
                What our customers say
                </h3>  
            </div>  
            <div className=' flex gap-28'>
                <Profile />
                <Profile />
                <Profile />
               
                
            </div>

        </div>
    </section>
  )
}
const Profile = ()=>{
    return(
        <div className='w-[368px] h-[354px] '>
            <div className=' bg-[#EFEFEF] w-full h-[247px] p-[35px] mb-9 box '>
               
                <div className=' relative h-[58px]'>
                        <h4 className=' text-[24px] leading-[30px] tracking-[0.46%] font-medium text-black222 mb-[5px] '>
                            John Carter
                        </h4>
                        <h4 className=' text-[18px] leading-[22.5px] tracking-[0.46%] font-normal text-black222  '>
                            John Carter
                        </h4>
                        <div className=' absolute top-1.5 right-0'>
                             <img src={coma} alt="" />
                        </div>
                </div>
                    
                
                <div className=' w-full h-[1.5px] bg-black my-[19px]'></div>
                <div>
                     <p className=" text-[16px] leading-[27px] font-normal text-gray75 mb-4">"Stylish, comfortable, and just right." I’ve never had clothes that feel this good and look this sharp. Modevo totally nailed it.</p>             
                </div>
            </div>
            <div>
                <img src={account} alt="" />
            </div>
        </div>
    )
}
export default Testimonial