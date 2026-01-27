import React from 'react'

const Button = (props) => {
  return (
    <>
        <button className=' h-13 px-9 py-3.5 bg-[#222222] text-[white] text-[14.5px] 
         font-medium leading-5.75 items-center '> <a href="#">{props.text}</a></button>
    </>
  )
}

export default Button