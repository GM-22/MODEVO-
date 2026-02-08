import React from 'react'

const Button = (props) => {
  return (
    <>
        <button className=' h-13 px-9 py-3.5 bg-[#222222] items-center '> <a className=' text-[white] text-[16px] 
         font-medium leading-5.75' href="#">{props.text}</a></button>
    </>
  )
}

export default Button