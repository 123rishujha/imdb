import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Styles from "./Carousel.module.css";

const SimpleSlider = ({ showBtn = false, isAutomatic = true, images }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isAutomatic,
    autoplaySpeed: 3000,
    prevArrow: showBtn && <SamplePrevArrow />,
    nextArrow: showBtn && <SampleNextArrow />,
  };

  return (
    <div className={Styles.mainCarouselHolder}>
      <Slider {...settings}>
        {images.map((elem) => {
          return (
            <div className={Styles.carouselImageHolder}>
              <img src={elem} alt="poster" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

// Custom Prev Arrow Component
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    >
      <span>&lt;</span>
    </div>
  );
};

// Custom Next Arrow Component
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    >
      <span>&gt;</span>
    </div>
  );
};

export default SimpleSlider;
