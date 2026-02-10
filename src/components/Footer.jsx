import Insta from '../assets/insta.svg'
import Twit from '../assets/twit.svg'
import Linkdn from '../assets/link.svg'
import YouTube from '../assets/youtube.svg'
import FB from '../assets/fb.svg'

const Footer = () => {
  return (
    <div className=' container '>
        <div>
            <div>
                <h3>Modevo.</h3>
                <p>Where modern fashion meets timeless style. We’re committed to delivering quality, comfort, and confidence — one piece at a time.</p>
                <ul>
                    <li><a href="#"><img src={Insta} alt="" /></a></li>
                    <li><a href="#"><img src={Twit} alt="" /></a></li>
                    <li><a href="#"><img src={Linkdn} alt="" /></a></li>
                    <li><a href="#"><img src={YouTube} alt="" /></a></li>
                    <li><a href="#"><img src={FB} alt="" /></a></li>
                    
                </ul>
            </div>
            <div>
                <h4>Shop Highlights</h4>
                <ul>
                    <li><a  href="#">Women</a></li>
                    <li><a  href="#">Men</a></li>
                    <li><a  href="#">Accessories</a></li>
                    <li><a  href="#">Bag</a></li>
                    <li><a  href="#">Shoes</a></li>
                    <li><a  href="#">Kids</a></li>
                </ul>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Footer