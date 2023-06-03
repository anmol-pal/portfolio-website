import React from "react";
import Slider from 'react-slick';

const Carousel = () =>{
    const setings = {
        dots : true,
        infinite : true,
        speed : 500,
        slidesToShow : 1,
        slidesToScroll : 1
    };
    return (
        <Slider>
            <div>
                <img src="carouselImages/photo1.jgp"/>
            </div>
            <div>
                <img src="carouselImages/photo2.jgp"/>
            </div>
            <div>
                <img src="carouselImages/photo3.jgp"/>
            </div>
        </Slider>
    )
}
export default Carousel;
