import React from 'react'

const Truck = (props) => {
  return (
    <div className="h-[184px] w-[296px] px-[70px] py-[29px] border border-[#E7E7E7] flex flex-col items-center justify-center text-center ">
  
  <img
    src={props.img}
    alt=""
    className="h-[64px] w-[64px] mb-[8px]"
  />

  <h3 className="text-[20px] font-medium text-[#222222]">
    {props.heading}
  </h3>

  <p className="text-[14px] leading-[21px] font-normal">
    {props.para}
  </p>

</div>

  )
}

export default Truck