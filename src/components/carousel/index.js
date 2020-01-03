import React from "react";
import Slider from "react-slick";
import "./index.scss";

const Carousel = (
  {
    data,
    carouselSettings
  }
) =>  {

  return (
    <div className="slick-container">
        <Slider {...carouselSettings}>
          {
            data.map(slide => {
              return (
                <div className="slider-item" key={slide.id}>
                  <img src={slide.background} />
                  <h2>{slide.title}</h2>
                </div>
              )
            })
          }
        </Slider>
  </div>
  );
};

export default Carousel;
