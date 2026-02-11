import img1 from "../assets/image_1.jpg";
import img2 from "../assets/image_6.jpg";
import img3 from "../assets/image_7.jpg";
import img4 from "../assets/image_8.jpg";
import img5 from "../assets/image_9.jpg";
import img6 from "../assets/image_10.jpg";
import img7 from "../assets/image_11.jpg";
import img8 from "../assets/image_12.jpg";
import search from "../assets/searchBtn.svg";
import loveBtn from "../assets/loveBtn.svg";
import buy from "../assets/buyBtn.svg";
import Slider from "react-slick";

const Featured = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  return (
    <div className=" h-[824px] container py-[56px] text-center  ">
      <h3 className=" text-black222 text-[40px] leading-auto font-medium tracking-[0.46%] mb-15 ">
        Featured
      </h3>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <FeatureCards
              image={img1}
              title={"Relaxed Stitch Shirt"}
              colors={["#55483B", "#403D72", "#E5C2C3", "#E6DDD6"]}
              price={"$223.000"}
            />
          </div>
          <div>
            <FeatureCards
              image={img2}
              title={"Off-Duty Denim Set"}
              colors={["#E5DCBF", "#2B2A2F", "#3A582C"]}
              price={"$179.000"}
            />
          </div>
          <div>
            <FeatureCards
              image={img3}
              title={"Utility Pocket Tee"}
              colors={["#E5DCBF", "#2B2A2F", "#3A582C"]}
              price={"$278.000"}
            />
          </div>
          <div>
            <FeatureCards
              image={img4}
              title={"Retro Crop Tank & Cargo"}
              colors={["#E5DCBF", "#2B2A2F", "#3A582C"]}
              price={"$223.000"}
            />
          </div>
          <div>
            <FeatureCards
              image={img5}
              title={"Retro Crop Tank & Cargo"}
              colors={["#E5DCBF", "#2B2A2F", "#3A582C"]}
              price={"$223.000"}
            />
          </div>
          <div>
            <FeatureCards
              image={img6}
              title={"Retro Crop Tank & Cargo"}
              colors={["#E5DCBF", "#2B2A2F", "#3A582C"]}
              price={"$223.000"}
            />
          </div>
          <div>
            <FeatureCards
              image={img7}
              title={"Retro Crop Tank & Cargo"}
              colors={["#E5DCBF", "#2B2A2F", "#3A582C"]}
              price={"$223.000"}
            />
          </div>
          <div>
            <FeatureCards
              image={img8}
              title={"Retro Crop Tank & Cargo"}
              colors={["#E5DCBF", "#2B2A2F", "#3A582C"]}
              price={"$223.000"}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};
const FeatureCards = ({ image, title, colors = [], price }) => {
  return (
    <div className=" w-[296px] h-[521px] group">
      <div className=" relative  ">
        <img src={image} className=" h-[419px] mb-5" alt="" />
        <div className="w-[166px] absolute flex gap-5 hidden group-hover:flex   z-10 left-14 transition-all bottom-7  " >
          <img src={search} alt="" />
          <img src={loveBtn} alt="" />
          <img src={buy} alt="" />
        </div>
      </div>
      <h4 className=" text-black222 text-4 font-medium text-center mb-2 ">
        {title}
      </h4>
      <div className=" flex gap-1.5 justify-center mb-4">
        {colors?.map((color, index) => (
          <button
            key={index}
            className={` rounded-[100%] size-4 cursor-pointer `}
            style={{ background: color }}
          ></button>
        ))}
      </div>
      <h4 className=" text-black222 text-4 font-medium leading-[21px] text-center mb-2 ">
        <div className=" group-hover:hidden ">
          {price}
        </div>
        <div>
          <button className=" hidden group-hover:flex mx-auto ">
            <a className=" text-3.5 font-semibold leading-auto text-black222 underline " href="#">ADD TO CART </a>
          </button>
        </div>
      </h4>
    </div>
  );
};

export default Featured;
