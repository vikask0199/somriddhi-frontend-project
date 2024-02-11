import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imageSlider from "../../assets/imageSlide.png"
import { useState } from "react";

function SimpleSlider() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        beforeChange: (index) => setCurrentSlideIndex(index),
        customPaging: i => (
            <div className={`h-2 text-blue mx-5 rounded-lg ${i === currentSlideIndex ? 'bg-red-500 w-7 duration-300' : 'bg-[#D9D9D9] w-5'}`}></div>
        )
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="w-full  h-[400px] px-10 outline-none">
                    <img className="h-full w-full" src={imageSlider} alt="" />
                </div>
                <div className="w-full  h-[400px] px-10 outline-none">
                    <img className="h-full w-full" src={imageSlider} alt="" />
                </div>
                <div className="w-full  h-[400px] px-10 outline-none">
                    <img className="h-full w-full" src={imageSlider} alt="" />
                </div>
            </Slider>
        </div>
    );
}

export default SimpleSlider;
