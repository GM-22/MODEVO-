import React from "react";
import Button from "../components/Button";
import Sale from "../components/Sale";
import image_1 from '../assets/truck.svg';
import image_2 from '../assets/pay_card.svg';
import image_3 from '../assets/gift_box.svg';
import image_4 from '../assets/call_24.svg';
import AboutUs from "../components/AboutUs";

const shepingItems = [
  {
    id : 1,
    img : image_1,
    heading : 'Free Shipping' ,
    para :  'For all Orders Over $100',

  },
  {
    id : 2,
    img :image_2,
    heading : 'Secured Payment',
    para :  'Payment Cards Accepted',

  },
  {
    id : 3,
    img : image_3,
    heading : '30 Days Returns',
    para : 'For an Exchange Product',

  },
  {
    id : 4,
    img : image_4,
    heading :  '24/7 Support' ,
    para : 'Contact us Anytime',

  }
]
const HomePage = () => {
  return (
    <>
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

      <Sale />
      <div className="container flex justify-around gap-8 ">
          {
            shepingItems.map((items) => {
              return(
                    <div key={items.id} className="h-[184px] w-[336px] px-[70px] py-[29px] border border-[#E7E7E7] flex flex-col   items-center justify-center text-center">
  
                      <img
                        src={items.img}
                        alt=""
                        className="h-[64px] w-[64px] mb-[8px]"
                      />

                      <h3 className="text-[20px] font-medium text-[#222222]">
                        {items.heading}
                      </h3>

                      <p className="text-[14px] leading-[21px] font-normal">
                        {items.para}
                      </p>

                  </div>
              )
            })
          }
      </div>
      <AboutUs />
    </>
  );
};

export default HomePage;
