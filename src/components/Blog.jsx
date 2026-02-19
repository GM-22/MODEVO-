import React from 'react'
import man from '../assets/newMan.svg'
import Slider from "react-slick";
import img1 from "../assets/image_1.jpg";
import img2 from "../assets/image_6.jpg";
import img3 from "../assets/image_7.jpg";
import img4 from "../assets/image_8.jpg";
import img5 from "../assets/image_9.jpg";
import img6 from "../assets/image_10.jpg";
import img7 from "../assets/image_11.jpg";
import img8 from "../assets/image_12.jpg";

const Blogs = () => {
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  return (
    <section>
        <div className=' lg:container h-[970px] '>
          <div className=' mx-auto w-[1280px] '>
            <div className=" text-center mb-[45px]">
            <h3 className=" text-[40px] leading-[55px] tracking-[0.46%] font-medium text-black222 mb-4 ">
              Our Latest News & Blogs
            </h3>
            <h4 className=" text-[18px] leading-[27px] font-normal text-gray75  ">
              Stay inspired with trend stories, expert styling tips, and fresh fashion insights — all curated just for you.
            </h4>
            </div>
            <div>
              <div className="slider-container">
                <Slider {...settings}>
                  <div>
                    <Card image={img1} title={"Effortless Style Made Easy"} para={"Look stylish with minimal effort using versatile basics perfect for everyday wear."} />
                  </div>
                  <div>
                    <Card image={img2} title={"Oversized Denim Looks Are In"} para={"From jackets to shirts, oversized pieces bring comfort and a modern edge to your wardrobe."} />
                  </div>
                  <div>
                    <Card image={img3} title={"Oversized Denim Looks Are In"} para={"From jackets to shirts, oversized pieces bring comfort and a modern edge to your wardrobe."} />
                  </div>
                  <div>
                    <Card image={img4} title={"Effortless Style Made Easy"} para={"Look stylish with minimal effort using versatile basics perfect for everyday wear."} />
                  </div>
                  <div>
                    <Card image={img5} title={"Oversized Denim Looks Are In"} para={"From jackets to shirts, oversized pieces bring comfort and a modern edge to your wardrobe."} />
                  </div>
                  <div>
                    <Card image={img6} title={"Oversized Denim Looks Are In"} para={"From jackets to shirts, oversized pieces bring comfort and a modern edge to your wardrobe."} />
                  </div>
                  <div>
                    <Card image={img7} title={"Effortless Style Made Easy"} para={"Look stylish with minimal effort using versatile basics perfect for everyday wear."} />
                  </div>
                  <div>
                    <Card image={img8} title={"Oversized Denim Looks Are In"} para={"From jackets to shirts, oversized pieces bring comfort and a modern edge to your wardrobe."} />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
    </section>
   
   
     
   
  )
}
const Card = ({image, title, para}) => {
  return(
    <div className=' w-[405px] h-[607px]  '>
        <div className='w-[405] h-[354px] '>
          <img className=' w-full h-full object-cover ' src={image} alt="" />
        </div>
        <div className='h-[253px] p-6.5 bg-grayBg'>
          <h4 className=" text-[12px] leading-[14px] font-medium tracking-[0.46%] text-[#B3404A] mb-3">NEWS</h4>
          <h3 className=" text-[24px] leading-[20px] font-medium tracking-[0.46%] text-black222 mb-4">{title}</h3>
          <div className=' flex  gap-2 mb-4 h-[27px] '>
            <img src={man} alt="" />
            <p className=" text-[12px] leading-[27px] font-semibold  text-black222 mb-4">By : Michell Kharesan</p>
          </div>
          <p className=" text-[16px] leading-[27px] font-normal text-gray75 mb-4">{para}</p>
          <button className='text-[14px] leading-[23px] font-medium text-black222 underline  '>READ MORE</button>
        </div>
    </div>
  )
}

export default Blogs