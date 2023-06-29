import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../components/MovieCard";
import SearchCard from "../components/SearchCard";
import { getMovieSuccess } from "../redux/movie/movie.action";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const movies = useSelector((store) => store.movieReducer.movies);
  const [result, setResult] = useState([]);
  const dispatch = useDispatch();

  console.log("result", result);
  console.log("movies", movies);

  const handleSubmit = () => {
    console.log("called");
    if (query === "") {
      alert("please type something");
      return;
    }
    let x = movies.filter(
      (elem) => elem.title.includes(query) || elem.description.includes(query)
    );
    setResult(x);
  };

  useEffect(() => {
    if (movies.length === 0) {
      dispatch(getMovieSuccess());
    }
  }, []);

  return (
    <div>
      <div style={{ display: "flex" }} >
        <input
          style={{ padding: "10px", flex: 1 }}
          type="text"
          placeholder="Search IMDb"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          onKeyPress={(e) => (e.key === "Enter" ? handleSubmit() : "")}
        >
          search
        </button>
      </div>
      <div style={{ display: "flex",flexWrap:"wrap" }}>
        {result?.map((elem) => {
          return (
            <div style={{ display: "flex", flexWrap: "wrap",gap:"10px",margin:"10px" }}>
              <SearchCard {...elem} key={(Math.random()+Date.now()).toString()} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchPage;
