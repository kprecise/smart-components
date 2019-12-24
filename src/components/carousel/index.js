import React from "react";
import Slider from "react-slick";
import "./index.scss";

const SimpleSlider = () =>  {

  const data = [
    {id: 1, background: 'https://via.placeholder.com/1110x400/E5E530', title: 'This is cool!'},
    {id: 2, background: 'https://via.placeholder.com/1110x400/808080/000000', title: 'Another heading!'},
    {id: 3, background: 'https://via.placeholder.com/1110x400/17BA0E/000000', title: 'More news!'},
    {id: 4, background: 'https://via.placeholder.com/1110x400/C9265F/FFFFFF', title: 'Fascinating stuff!'}
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slick-container">
        <Slider {...settings}>
          {
            data.map(slide => {
              return (
                <div className="slider-item">
                  <img src={slide.background} key={slide.id} />
                  <h2>{slide.title}</h2>
                </div>
              )
            })
          }
        </Slider>
  </div>
  );
};

export default SimpleSlider;
