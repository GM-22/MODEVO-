import React from 'react'
import arrow from '../assets/arrow.svg'
const Button = ({text, primary = true , arrowImg= false }) => {
    return (
    <button
      className={`h-13 px-9 py-3.5 flex gap-[13px] text-[16px] font-medium leading-6 ${
        primary
          ? "bg-[#222222] text-white"
          : "bg-white text-black"
      }`}
    >
      <div>
        {text} 
      </div>
      <div >
        {arrowImg ? <img src={arrow} alt="" /> : null}

      </div>
    </button>
  );
}

export default Button