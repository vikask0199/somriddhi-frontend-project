import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function MemberSlider() {
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
                <div className="w-full px-10 outline-none pb-10">
                    <div className="flex flex-wrap gap-5 justify-center">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div key={index} className="border md:w-48  flex flex-col items-center p-5 text-center gap-5 bg-white rounded-lg">
                                <p className="font-bold text-green-600">Upto 60% off on Appliances</p>
                                <div className="flex items-center justify-center  w-1/2">
                                    <img src="https://s3-alpha-sig.figma.com/img/3d9f/c6d0/93a8cd8d4354cf604534b27c3592cc8e?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MjkuwxTdGy1hjVM2eADORTcI5QTYA~LSF5PrH0VuWTclAaX3m2uK3ukA6mgqokSN1ZvKRjw9iQUm40fIwlpatzqD34NdDY62yxaGZn9vRZKZoxtFvD73uPkDFwqLVFWB-CIFvXbI6XfrL1wbPR69Gz4oNtGUyL4U~cMF0~Zg1-J6V3E5QAwkIOr-vWXqAngNAodBjHhanSdIcGA8BcS3dQOAL4FutluW9sVXOxyCTH9DxNzFx0xby2kBHk1BuOCdN54orLK6UtUe07qfR-IRd~El-Yb5Yeqo6EopPUr~6U1Np4gJcoQtaSQGixgxjqr4Wb4cWGPyXnzN2elXCpFONg__" alt="" className="h-full" />
                                </div>
                                <p className="text-sm">Upto 60% off on summer Appliances</p>
                                <button className="px-3 rounded-lg text-white bg-red-600 py-1">Grab now</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full px-10 outline-none pb-10">
                    <div className="flex flex-wrap gap-5 justify-center">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div key={index} className="border md:w-48  flex flex-col items-center p-5 text-center gap-5 bg-white rounded-lg">
                                <p className="font-bold text-green-600">Upto 60% off on Appliances</p>
                                <div className="flex items-center justify-center  w-1/2">
                                    <img src="https://s3-alpha-sig.figma.com/img/3d9f/c6d0/93a8cd8d4354cf604534b27c3592cc8e?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MjkuwxTdGy1hjVM2eADORTcI5QTYA~LSF5PrH0VuWTclAaX3m2uK3ukA6mgqokSN1ZvKRjw9iQUm40fIwlpatzqD34NdDY62yxaGZn9vRZKZoxtFvD73uPkDFwqLVFWB-CIFvXbI6XfrL1wbPR69Gz4oNtGUyL4U~cMF0~Zg1-J6V3E5QAwkIOr-vWXqAngNAodBjHhanSdIcGA8BcS3dQOAL4FutluW9sVXOxyCTH9DxNzFx0xby2kBHk1BuOCdN54orLK6UtUe07qfR-IRd~El-Yb5Yeqo6EopPUr~6U1Np4gJcoQtaSQGixgxjqr4Wb4cWGPyXnzN2elXCpFONg__" alt="" className="h-full" />
                                </div>
                                <p className="text-sm">Upto 60% off on summer Appliances</p>
                                <button className="px-3 rounded-lg text-white bg-red-600 py-1">Grab now</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full px-10 outline-none pb-10">
                    <div className="flex flex-wrap gap-5 justify-center">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div key={index} className="border md:w-56  flex flex-col items-center p-5 text-center gap-5 bg-white rounded-lg">
                                <p className="font-bold text-green-600">Upto 60% off on Appliances</p>
                                <div className="flex items-center justify-center  w-1/2">
                                    <img src="https://s3-alpha-sig.figma.com/img/3d9f/c6d0/93a8cd8d4354cf604534b27c3592cc8e?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MjkuwxTdGy1hjVM2eADORTcI5QTYA~LSF5PrH0VuWTclAaX3m2uK3ukA6mgqokSN1ZvKRjw9iQUm40fIwlpatzqD34NdDY62yxaGZn9vRZKZoxtFvD73uPkDFwqLVFWB-CIFvXbI6XfrL1wbPR69Gz4oNtGUyL4U~cMF0~Zg1-J6V3E5QAwkIOr-vWXqAngNAodBjHhanSdIcGA8BcS3dQOAL4FutluW9sVXOxyCTH9DxNzFx0xby2kBHk1BuOCdN54orLK6UtUe07qfR-IRd~El-Yb5Yeqo6EopPUr~6U1Np4gJcoQtaSQGixgxjqr4Wb4cWGPyXnzN2elXCpFONg__" alt="" className="h-full" />
                                </div>
                                <p className="text-sm">Upto 60% off on summer Appliances</p>
                                <button className="px-3 rounded-lg text-white bg-red-600 py-1">Grab now</button>
                            </div>
                        ))}
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default MemberSlider;
