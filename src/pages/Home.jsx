import { useEffect } from "react";

import Carousel from "../components/Carousel/Carousel";
import Styles from "./Home.module.css";

import { useSelector, useDispatch } from "react-redux";
import { getMovieSuccess } from "../redux/movie/movie.action";
import Listitems from "../components/ListItem";

const Home = () => {
  const movies = useSelector((store) => store.movieReducer.movies);
  const dispatch = useDispatch();
  console.log("movies on home page", movies);

  const images = [
    "https://images.thedirect.com/media/article_full/world-war-hulk-marvel-movie-mcu.jpg",
    "https://cdn.marvel.com/content/1x/maguiregarfieldholland_opt.jpg",
    "https://assets-prd.ignimgs.com/2022/06/09/transformers-slideshow-cover-1654818457602.jpg",
  ];

  useEffect(() => {
    dispatch(getMovieSuccess());
  }, []);

  return (
    <div>
      <div style={{ width: "100vw", margin: "auto" }}>
        <Carousel images={images} />s
      </div>

      <div className={Styles.featuredTodayHeading}>
        <h2>Featured today</h2>
      </div>
      <div style={{boxSizing:"border-box",overflow:"hidden",width:"90vw",margin:"auto"}}>
        <Listitems arr={movies.splice(0, 10)} />
      </div>
    </div>
  );
};

export default Home;
