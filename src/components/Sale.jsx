import React from "react";
import Button from "../components/Button";

const Sale = () => {
  return (
    <>
      <div className=" lg:container ">
        <div className="flex justify-around gap-[32px] mb-[68px]">
        {/* Sale Card 1 */}
        <div
          className="h-[344px] w-[624px] bg-cover bg-no-repeat pt-[34px] pl-[40px]"
          style={{
            backgroundImage: "url('../src/assets/sm-1.jpg')",
          }}
        >
          <div className="h-[204px] w-[289px]">
            <p className="text-[16px] leading-[42px] tracking-[0.46px] text-[#757575] font-medium">
              SALE UP TO 25%
            </p>
            <h3 className="text-[32px] leading-[42px] tracking-[0.46px] mb-[26px] font-medium">
              It’s in the Bag: Limited Deals
            </h3>
            <Button text="SHOW ME" />
          </div>
        </div>

        {/* Sale Card 2 */}
        <div
          className="h-[344px] w-[624px] bg-cover bg-no-repeat pt-[34px] pl-[40px] bg-black/25 "
          style={{
            backgroundImage: "url('../src/assets/sm-2.jpg')",
          }}
        >
          <div className="h-[204px] w-[289px ] ">
            <p className="text-[16px] leading-[42px] tracking-[0.46px] text-[#444444] font-medium">
              SALE UP TO 25%
            </p>
            <h3 className="text-[32px] leading-[42px] tracking-[0.46px] mb-[26px] font-medium">
              Make a Statement This Season
            </h3>
            <Button text="SHOW ME" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Sale;
