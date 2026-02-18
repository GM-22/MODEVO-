import Insta from '../assets/insta.svg'
import Twit from '../assets/twit.svg'
import Linkdn from '../assets/link.svg'
import YouTube from '../assets/youtube.svg'
import FB from '../assets/fb.svg'


const Footer = () => {
  return (
    <div className=' container py-[70px] '>
        <div className=' flex justify-around mb-12'>
            <div className=' max-w-[330px] '>
                <h3 className=' text-[32px] leading-auto font-semibold text-black222 mb-2 '>Modevo.</h3>
                
                <p className='text-[14px] leading-[23px] font-normal text-gray75 mb-[30px] '>Where modern fashion meets timeless style. We’re committed to delivering quality, comfort, and confidence — one piece at a time.</p>
                <ul className=' flex justify-around w-[220px]'>
                    <li><a href="#"><img src={Insta} alt="" /></a></li>
                    <li><a href="#"><img src={Twit} alt="" /></a></li>
                    <li><a href="#"><img src={Linkdn} alt="" /></a></li>
                    <li><a href="#"><img src={YouTube} alt="" /></a></li>
                    <li><a href="#"><img src={FB} alt="" /></a></li>
                    
                </ul>
            </div>
            <div>
                <h4 className=' text-[18px] leading-[20px] font-medium text-black222 tracking-[0.46%] mb-5 '>Shop Highlights</h4>
                <ul className=' flex flex-col gap-1.5'>
                    <li className=' text-[14px] leading-[20px] font-medium text-gray75 tracking-[0.46%]  '><a  href="#">Women</a></li>
                    <li className=' text-[14px] leading-[20px] font-medium text-gray75 tracking-[0.46%]  '><a  href="#">Men</a></li>
                    <li className=' text-[14px] leading-[20px] font-medium text-gray75 tracking-[0.46%]  '><a  href="#">Accessories</a></li>
                    <li className=' text-[14px] leading-[20px] font-medium text-gray75 tracking-[0.46%]  '><a  href="#">Bag</a></li>
                    <li className=' text-[14px] leading-[20px] font-medium text-gray75 tracking-[0.46%]  '><a  href="#">Shoes</a></li>
                    <li className=' text-[14px] leading-[20px] font-medium text-gray75 tracking-[0.46%]  '><a  href="#">Kids</a></li>
                </ul>
            </div>
            <div >
                <h4 className=' text-[18px] leading-[20px] font-medium text-black222 tracking-[0.46%] mb-5 '>Quick Links</h4>
                <ul className=' flex flex-col gap-1.5'>
                    <li className=' text-[14px] leading-[20px] font-medium text-gray75 tracking-[0.46%]  '><a  href="#">Home</a></li>
                    <li className=' text-[14px] leading-[20px] font-medium text-gray75 tracking-[0.46%]  '><a  href="#">Shop</a></li>
                    <li className=' text-[14px] leading-[20px] font-medium text-gray75 tracking-[0.46%]  '><a  href="#">Product</a></li>
                    <li className=' text-[14px] leading-[20px] font-medium text-gray75 tracking-[0.46%]  '><a  href="#">Blog</a></li>
                    <li className=' text-[14px] leading-[20px] font-medium text-gray75 tracking-[0.46%]  '><a  href="#">New Arrivals</a></li>
                    
                </ul>
            </div>
            <div>
                <h4 className=' text-[18px] leading-[20px] font-medium text-black222 tracking-[0.46%] mb-5 '>Customer Services</h4>
                <ul className=' flex flex-col gap-1.5'>
                    <li className=' text-[14px] leading-[20px] font-medium text-gray75 tracking-[0.46%]  '><a  href="#">My Account</a></li>
                    <li className=' text-[14px] leading-[20px] font-medium text-gray75 tracking-[0.46%]  '><a  href="#">Track Your Order</a></li>
                    <li className=' text-[14px] leading-[20px] font-medium text-gray75 tracking-[0.46%]  '><a  href="#">Return</a></li>
                    <li className=' text-[14px] leading-[20px] font-medium text-gray75 tracking-[0.46%]  '><a  href="#">FAQ</a></li>
                    <li className=' text-[14px] leading-[20px] font-medium text-gray75 tracking-[0.46%]  '><a  href="#">Privacy Policy</a></li>
                   
                </ul>
            </div>
            <div>
                <h4 className=' text-[18px] leading-[20px] font-medium text-black222 tracking-[0.46%] mb-5 '>Contact Info</h4>
                <ul className=' flex flex-col gap-1.5'>
                    <li className=' text-[14px] leading-[20px] font-medium text-gray75 tracking-[0.46%]  '><a  href="#">Phone: +01 824 75849</a></li>
                    <li className=' text-[14px] leading-[20px] font-medium text-gray75 tracking-[0.46%]  '><a  href="#">Address: Lorem ipsum dolor set </a></li>
                    <li className=' text-[14px] leading-[20px] font-medium text-gray75 tracking-[0.46%]  '><a  href="#">Email: vereva@domain.com</a></li>                
                </ul>
            </div>
        </div>
        <div className=' w-full bg-[#D4D4D4] h-[1px]'></div>
        <div>
            <h4 className=' text-[14px] leading-[21px] text-center mt-[21px] font-medium text-gray75 '>@Copyright 2027 - Vereva Tempplate by burdurstudio</h4>
        </div>
        
    </div>
  )
}


export default Footer