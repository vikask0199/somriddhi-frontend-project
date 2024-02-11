import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function PupularMembe() {
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
                <div className="w-full outline-none flex flex-col">
                    <div className="flex mb-2 gap-2 md:mb-10 justify-around flex-col md:flex-row">
                        <div className="max-h-[600px] md:w-1/2">
                            <img className="h-full w-full " src="https://s3-alpha-sig.figma.com/img/6ced/8cb3/ffa1b9d5bd367a765f5c1cfb0f548337?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bhUqnJFKD7jbvvs868Y8eCnzHQ1TGSINPDFzjlocPAlo0zXxNhlHGOMKQ2x3wQ6H4lpjnQ40mrbkt1B8n3JnhPU2pboqd8OHmymCyHAUhAFKod5L4fvsyaoJeR7qAof7y01IID6mgh51xUFjO91WnLvhgnomzv~mOzfeOBd2pqIWMPGI277Wiu3XmShQ1JdohP~KQpgm-yvZTVjOLcDK-Eb3vsmYk9IwsLBQJJv~gJvlGd2PIH3028TZ2TdjDVNE~x~fsy1GwEx1u4XlgQcYAtkvJnK8ZW1YOL1ZyM7kOXKUidk6RyaCCTcLbwDZ6YmXaMSm99S7cTmZ92cYy3Vz4Q__" alt="" />
                        </div>
                        <div className="flex md:w-1/2 flex-wrap justify-center border md:p-10 p-5 bg-[#EDEDED]">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div key={index} className=" w-1/2  flex flex-col items-center p-5 text-center gap-5 bg-white">
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
                    <div className="flex md:mb-10 justify-around mb-2 gap-2 flex-col md:flex-row">
                        <div className="md:w-1/2">
                            <img className="h-full w-full" src="https://s3-alpha-sig.figma.com/img/6ced/8cb3/ffa1b9d5bd367a765f5c1cfb0f548337?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bhUqnJFKD7jbvvs868Y8eCnzHQ1TGSINPDFzjlocPAlo0zXxNhlHGOMKQ2x3wQ6H4lpjnQ40mrbkt1B8n3JnhPU2pboqd8OHmymCyHAUhAFKod5L4fvsyaoJeR7qAof7y01IID6mgh51xUFjO91WnLvhgnomzv~mOzfeOBd2pqIWMPGI277Wiu3XmShQ1JdohP~KQpgm-yvZTVjOLcDK-Eb3vsmYk9IwsLBQJJv~gJvlGd2PIH3028TZ2TdjDVNE~x~fsy1GwEx1u4XlgQcYAtkvJnK8ZW1YOL1ZyM7kOXKUidk6RyaCCTcLbwDZ6YmXaMSm99S7cTmZ92cYy3Vz4Q__" alt="" />
                        </div>
                        <div className="md:w-1/2">
                            <img className="h-full w-full" src="https://s3-alpha-sig.figma.com/img/76dc/e1f7/4b6cfad255644e5953465e823458049a?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g22UUxpsBfRuEwzPkoQzuRWMHstdt6PoWUEuNG548qv8jVnmQk0hPD0XymDKnHTjHTMb72XA3InknDS3lVeuxkz-dbNvWobDWLFWyIXxsECkXquBjdK2PvMgB37t6vM0mnHoJ2xCn0UypkNMlRZotU4wx6zwQNyJN7oC7XpjVLuIrZpANK-wq~CpzVKVWG1u24hTY9-5UNGGzmX3rL8ihWA1KTPjIGVTLdy7V-UVNlmuov7cfMXF12RHJ-P9s1gy2uomICkVCGltCRle4BG6NBbA4LCNr1XbCQeuWDDGjuQjbY1xGs8teWvRhcIjhxRZxwcKZ92AO4kdcNDaPdBzxQ__" alt="" />
                        </div>
                    </div>
                </div>

                <div className="w-full outline-none flex flex-col">
                    <div className="flex mb-2 gap-2 md:mb-10 justify-around flex-col md:flex-row">
                        <div className="max-h-[600px] md:w-1/2">
                            <img className="h-full w-full " src="https://s3-alpha-sig.figma.com/img/6ced/8cb3/ffa1b9d5bd367a765f5c1cfb0f548337?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bhUqnJFKD7jbvvs868Y8eCnzHQ1TGSINPDFzjlocPAlo0zXxNhlHGOMKQ2x3wQ6H4lpjnQ40mrbkt1B8n3JnhPU2pboqd8OHmymCyHAUhAFKod5L4fvsyaoJeR7qAof7y01IID6mgh51xUFjO91WnLvhgnomzv~mOzfeOBd2pqIWMPGI277Wiu3XmShQ1JdohP~KQpgm-yvZTVjOLcDK-Eb3vsmYk9IwsLBQJJv~gJvlGd2PIH3028TZ2TdjDVNE~x~fsy1GwEx1u4XlgQcYAtkvJnK8ZW1YOL1ZyM7kOXKUidk6RyaCCTcLbwDZ6YmXaMSm99S7cTmZ92cYy3Vz4Q__" alt="" />
                        </div>
                        <div className="flex md:w-1/2 flex-wrap justify-center border md:p-10 p-5 bg-[#EDEDED]">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div key={index} className=" w-1/2  flex flex-col items-center p-5 text-center gap-5 bg-white">
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
                    <div className="flex md:mb-10 justify-around mb-2 gap-2 flex-col md:flex-row">
                        <div className="md:w-1/2">
                            <img className="h-full w-full" src="https://s3-alpha-sig.figma.com/img/6ced/8cb3/ffa1b9d5bd367a765f5c1cfb0f548337?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bhUqnJFKD7jbvvs868Y8eCnzHQ1TGSINPDFzjlocPAlo0zXxNhlHGOMKQ2x3wQ6H4lpjnQ40mrbkt1B8n3JnhPU2pboqd8OHmymCyHAUhAFKod5L4fvsyaoJeR7qAof7y01IID6mgh51xUFjO91WnLvhgnomzv~mOzfeOBd2pqIWMPGI277Wiu3XmShQ1JdohP~KQpgm-yvZTVjOLcDK-Eb3vsmYk9IwsLBQJJv~gJvlGd2PIH3028TZ2TdjDVNE~x~fsy1GwEx1u4XlgQcYAtkvJnK8ZW1YOL1ZyM7kOXKUidk6RyaCCTcLbwDZ6YmXaMSm99S7cTmZ92cYy3Vz4Q__" alt="" />
                        </div>
                        <div className="md:w-1/2">
                            <img className="h-full w-full" src="https://s3-alpha-sig.figma.com/img/76dc/e1f7/4b6cfad255644e5953465e823458049a?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g22UUxpsBfRuEwzPkoQzuRWMHstdt6PoWUEuNG548qv8jVnmQk0hPD0XymDKnHTjHTMb72XA3InknDS3lVeuxkz-dbNvWobDWLFWyIXxsECkXquBjdK2PvMgB37t6vM0mnHoJ2xCn0UypkNMlRZotU4wx6zwQNyJN7oC7XpjVLuIrZpANK-wq~CpzVKVWG1u24hTY9-5UNGGzmX3rL8ihWA1KTPjIGVTLdy7V-UVNlmuov7cfMXF12RHJ-P9s1gy2uomICkVCGltCRle4BG6NBbA4LCNr1XbCQeuWDDGjuQjbY1xGs8teWvRhcIjhxRZxwcKZ92AO4kdcNDaPdBzxQ__" alt="" />
                        </div>
                    </div>
                </div>

                <div className="w-full outline-none flex flex-col">
                    <div className="flex mb-2 gap-2 md:mb-10 justify-around flex-col md:flex-row">
                        <div className="max-h-[600px] md:w-1/2">
                            <img className="h-full w-full " src="https://s3-alpha-sig.figma.com/img/6ced/8cb3/ffa1b9d5bd367a765f5c1cfb0f548337?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bhUqnJFKD7jbvvs868Y8eCnzHQ1TGSINPDFzjlocPAlo0zXxNhlHGOMKQ2x3wQ6H4lpjnQ40mrbkt1B8n3JnhPU2pboqd8OHmymCyHAUhAFKod5L4fvsyaoJeR7qAof7y01IID6mgh51xUFjO91WnLvhgnomzv~mOzfeOBd2pqIWMPGI277Wiu3XmShQ1JdohP~KQpgm-yvZTVjOLcDK-Eb3vsmYk9IwsLBQJJv~gJvlGd2PIH3028TZ2TdjDVNE~x~fsy1GwEx1u4XlgQcYAtkvJnK8ZW1YOL1ZyM7kOXKUidk6RyaCCTcLbwDZ6YmXaMSm99S7cTmZ92cYy3Vz4Q__" alt="" />
                        </div>
                        <div className="flex md:w-1/2 flex-wrap justify-center border md:p-10 p-5 bg-[#EDEDED]">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div key={index} className=" w-1/2  flex flex-col items-center p-5 text-center gap-5 bg-white">
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
                    <div className="flex md:mb-10 justify-around mb-2 gap-2 flex-col md:flex-row">
                        <div className="md:w-1/2">
                            <img className="h-full w-full" src="https://s3-alpha-sig.figma.com/img/6ced/8cb3/ffa1b9d5bd367a765f5c1cfb0f548337?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bhUqnJFKD7jbvvs868Y8eCnzHQ1TGSINPDFzjlocPAlo0zXxNhlHGOMKQ2x3wQ6H4lpjnQ40mrbkt1B8n3JnhPU2pboqd8OHmymCyHAUhAFKod5L4fvsyaoJeR7qAof7y01IID6mgh51xUFjO91WnLvhgnomzv~mOzfeOBd2pqIWMPGI277Wiu3XmShQ1JdohP~KQpgm-yvZTVjOLcDK-Eb3vsmYk9IwsLBQJJv~gJvlGd2PIH3028TZ2TdjDVNE~x~fsy1GwEx1u4XlgQcYAtkvJnK8ZW1YOL1ZyM7kOXKUidk6RyaCCTcLbwDZ6YmXaMSm99S7cTmZ92cYy3Vz4Q__" alt="" />
                        </div>
                        <div className="md:w-1/2">
                            <img className="h-full w-full" src="https://s3-alpha-sig.figma.com/img/76dc/e1f7/4b6cfad255644e5953465e823458049a?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g22UUxpsBfRuEwzPkoQzuRWMHstdt6PoWUEuNG548qv8jVnmQk0hPD0XymDKnHTjHTMb72XA3InknDS3lVeuxkz-dbNvWobDWLFWyIXxsECkXquBjdK2PvMgB37t6vM0mnHoJ2xCn0UypkNMlRZotU4wx6zwQNyJN7oC7XpjVLuIrZpANK-wq~CpzVKVWG1u24hTY9-5UNGGzmX3rL8ihWA1KTPjIGVTLdy7V-UVNlmuov7cfMXF12RHJ-P9s1gy2uomICkVCGltCRle4BG6NBbA4LCNr1XbCQeuWDDGjuQjbY1xGs8teWvRhcIjhxRZxwcKZ92AO4kdcNDaPdBzxQ__" alt="" />
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default PupularMembe;
