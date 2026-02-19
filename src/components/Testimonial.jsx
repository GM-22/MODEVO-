import React from 'react'
import coma from '../assets/coma.svg'
import account from '../assets/account.svg'
const Testimonial = () => {
  return (
    <section className=' lg:container h-[676px] py-[84px]'>
        <div className='max-w-[1280px] mx-auto'>
            <div> 
                <h4 className=" text-[18px] leading-[27px] font-normal text-gray75  ">
                Testimonial
                </h4>
                <h3 className=" text-[40px] leading-[60px] tracking-[0.46%] font-medium text-black222 mb-12 ">
                What our customers say
                </h3>  
            </div>  
            <div className=' flex gap-28'>
                <Profile title={"John Carter"} subtitle={"Creative Director"} para={'"Stylish, comfortable, and just right." I’ve never had clothes that feel this good and look this sharp. Modevo totally nailed it.'} />
                <Profile title={"Emily Green"} subtitle={"Fashion Blogger"} para={'"My go-to for modern essentials." Everything fits perfectly and feels premium. The details really make the difference!'} />
                <Profile title={"Sophia Turner"} subtitle={"Marketing Consultant"} para={'"Fashion that fits my lifestyle." I love how effortless it is to mix and match their pieces. It saves me so much time.'} />
               
                
            </div>

        </div>
    </section>
  )
}
const Profile = ({title, subtitle, para})=>{
    return(
        <div className='w-[368px] h-[354px] '>
            <div className=' bg-[#EFEFEF] w-full h-[247px] p-[35px] mb-9 box '>
               
                <div className=' relative h-[58px]'>
                        <h4 className=' text-[24px] leading-[30px] tracking-[0.46%] font-medium text-black222 mb-[5px] '>
                            {title}
                        </h4>
                        <h4 className=' text-[18px] leading-[22.5px] tracking-[0.46%] font-normal text-black222  '>
                            {subtitle}
                        </h4>
                        <div className=' absolute top-1.5 right-0'>
                             <img src={coma} alt="" />
                        </div>
                </div>
                    
                
                <div className=' w-full h-[1.5px] bg-black my-[19px]'></div>
                <div>
                     <p className=" text-[16px] leading-[27px] font-normal text-gray75 mb-4">{para}</p>             
                </div>
            </div>
            <div>
                <img src={account} alt="" />
            </div>
        </div>
    )
}
export default Testimonial