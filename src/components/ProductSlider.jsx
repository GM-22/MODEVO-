import img1 from '../assets/image_1.jpg'
import Slider from "react-slick";
import img2 from '../assets/image_2.jpg'
import img3 from '../assets/image_3.jpg'
import img4 from '../assets/image_4.jpg'
import img5 from '../assets/image_5.jpg'
import img6 from '../assets/image_6.jpg'
import img7 from '../assets/image_7.jpg'
import img8 from '../assets/image_8.jpg'
import img9 from '../assets/image_9.jpg'
import img10 from '../assets/image_10.jpg'
import img11 from '../assets/image_11.jpg'
import img12 from '../assets/image_12.jpg'


const ProductSlider = () => {
  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToScroll: 2,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  }
  return (
    <div className="slider-container  container h-[186px] ">
      <Slider {...settings}>
        <div>
          <ProductSliderImage image={img1} />
        </div>
        <div>
          <ProductSliderImage image={img2} />
        </div>
        <div>
         <ProductSliderImage image={img3} />
        </div>
        <div>
          <ProductSliderImage image={img4} />
        </div>
        <div>
          <ProductSliderImage image={img5} />
        </div>
        <div>
          <ProductSliderImage image={img6} />
        </div>
        <div>
          <ProductSliderImage image={img7} />
        </div>
        <div>
          <ProductSliderImage image={img8} />
        </div>
        <div>
          <ProductSliderImage image={img9} />
        </div>
        <div>
          <ProductSliderImage image={img10} />
        </div>
        <div>
          <ProductSliderImage image={img11} />
        </div>
        <div>
          <ProductSliderImage image={img12} />
        </div>
      </Slider>
    </div>
  )
}
const ProductSliderImage = ({image}) =>{
    return (
      <div className=' w-[234px] h-[184px] px-[46px] py-[59px] '>
        <img src={image} alt="" className=' w-[117px] h-[92px]  ' />
      </div>
    )
  }

export default ProductSlider