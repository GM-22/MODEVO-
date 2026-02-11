import React from 'react'


const SmallCards = (props) => {
  return (
    <div className='h-[390.06px] w-[296px]  align-center items-center'>
        <img src={props.img} alt="" className='w-[296px] h-[300px] mb-[17px]' />
        <h4 className=' text-[16px] leading-[21px] font-medium mb-2.5' >{props.title}</h4>
        <p className=' text-[16px] leading-[21px] font-medium '>{props.price}</p>
    </div>
  )
}

export default SmallCards