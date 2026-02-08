import React from 'react'
import Collection from '../assets/fashion.jpg'
import Button from './Button'
import Heel from '../assets/heels.jpg'
import Bag from '../assets/beg.jpg'
import Belt from '../assets/belt.jpg'
// import Sunglass from '../assets/Sunglass.jpg'
import Sunglass from '../assets/sunglass.jpg'
import SmallCards from './SmallCards'

const NewCollection = () => {
  return (
    <div className='container p-20 flex gap-[69px]'>
        <div className=''>
            <div className='w-[587px] mb-12'>
                <h3 className=' text-[40px] font-medium leading-10.5 text-black-222 mb-4 '>New Arrival Collection</h3>
                <p className=' text-[18px] font-normal leading-6.75 text-black-222 mb-7.5 '>Step into the season with fresh essentials. From statement heels to everyday accessories — curated to elevate your style in every detail.</p>
                <Button text='SHOP NOW' />
                
            </div>
            <div>
                <img src={Collection} alt="" className=' h-[590px] w-[587px] ' />
            </div>
        </div>
        <div className=' grid grid-cols-2 '>
            <SmallCards 
                img = {Heel}
                title="Golden Strappy Heels"
                price = "$179.000"

            />
            <SmallCards 
                img = {Bag}
                title="Floral Embossed Cream Tote"
                price = "$249.000"

            />
            <SmallCards 
                img = {Belt}
                title="Slim Matte Black Belt"
                price = "$79.000"

            />
            <SmallCards 
                img = {Sunglass}
                title="Bold Frame Sunglasses"
                price = "$80.000"

            />
        </div>
    </div>
  )
}

export default NewCollection