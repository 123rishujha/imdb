import MovieCard from "./MovieCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Listitems = ({ arr }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: false,
    nextArrow: false,
  };

  return (
    <div style={{ width: "95vw", boxSizing: "border-box",margin:"auto" }}>
      <Slider {...settings}>
        {arr?.map((elem, index) => {
          return <MovieCard key={index} {...elem} />;
        })}
      </Slider>
    </div>
  );
};

export default Listitems;
