import React from 'react'
import image_1 from '../assets/truck.svg';
import image_2 from '../assets/pay_card.svg';
import image_3 from '../assets/gift_box.svg';
import image_4 from '../assets/call_24.svg';
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
const Shep = () => {
  return (
<div className="container flex justify-around gap-8 ">
          {
            shepingItems.map((items) => {
              return(
                    <div key={items.id} className="h-[184px] w-[336px] px-[70px] py-[29px] border border-[#E7E7E7] flex flex-col   items-center justify-center text-center">
                      <Sheping img={items.img} heading={items.heading}  para={items.para}/>                
                  </div>
              )
            })
          }
      </div>

  )
}
const Sheping = ({img, heading, para}) => {
  return(
        <div className="h-[184px] w-[296px] px-[70px] py-[29px] border border-[#E7E7E7] flex flex-col items-center justify-center text-center ">
  
  <img
    src={img}
    alt=""
    className="h-[64px] w-[64px] mb-[8px]"
  />

  <h3 className="text-[20px] font-medium text-[#222222]">
    {heading}
  </h3>

  <p className="text-[14px] leading-[21px] font-normal">
    {para}
  </p>

</div>
  )
}

export default Shep