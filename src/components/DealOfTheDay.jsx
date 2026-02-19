import React from "react";
import img1 from "../assets/image_9.jpg";
import img2 from "../assets/image_8.jpg";
import img3 from "../assets/image_4.jpg";
import Button from "./Button";
const DealOfTheDay = () => {
  return (
    <section className=" lg:container  py-20 ">
      <div className=" mx-auto w-[1280px]">
        <div className=" text-center mb-[45px]">
          <h4 className=" text-[18px] leading-[27px] font-normal text-gray75 mb-2 ">
            Today Deal
          </h4>

          <h3 className=" text-[40px] leading-[55px] tracking-[0.46%] font-medium text-black222 mb-4 ">
            Deal of the day
          </h3>
          <h4 className=" text-[18px] leading-[27px] font-normal text-gray75  ">
            Limited-time styles at unbeatable prices, Shop today’s hottest picks
            before they’re gone!
          </h4>
        </div>
        <div className=" flex gap-8 ">
          <div
            className=" w-[624px] h-[712px] p-[50px]"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: "cover",
            }}
          >
            <h4 className=" text-[18px] leading-[27px] font-normal text-black222 mb-[5px] ">Flat 20% Discount</h4>
            <h3 className=" text-[28px] leading-[42px] font-medium text-black222 mb-4 ">Don’t Miss Today’s Exclusive Picks</h3>
            <h4 className=" text-[18px] leading-[27px] font-normal text-black222 mb-[30px] ">Casual, cool, and always in style.</h4>
            <Button text={"SHOP NOW"} arrowImage = {true} primary= {false} />
          </div>
          <div className=" flex flex-col gap-8 " >
            <DayCard image={img2} discount={"Flat 30% Discount"} title={"Playful Kids Tee"} />
            <DayCard image={img3} discount={"Flat 30% Discount"} title={"Rust Belted Trench"} />
           
          </div>
        </div>
      </div>
    </section>
  );
};
const DayCard = ({image , discount, title}) => {
    return(
        <div>
            <div
            className=" w-[624px] h-[340px] p-[50px]"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
            }}
          >
            <h4 className=" text-[18px] leading-[27px] font-normal text-black222 mb-[5px] ">{discount}</h4>
            <h3 className=" text-[28px] leading-[42px] font-medium text-black222 mb-4 ">{title}</h3>
            
            <Button text={"SHOP NOW"} arrowImage = {true} primary= {false} />
          </div>
        </div>
    )
}
export default DealOfTheDay;
