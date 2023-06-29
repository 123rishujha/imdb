import * as types from "./movie.types";
import axios from "axios";

//action object functions
export const movieLoading = () => {
  return { type: types.MOVIE_LOADING };
};

export const movieError = () => {
  return { type: types.MOVIE_ERROR };
};

export const movieSuccess = (payload) => {
  return { type: types.GET_MOVIE_SUCCESS, payload };
};

export const getMovieSuccess = () => async (dispatch) => {
  dispatch(movieLoading);
  try {
    let res = await axios.get(
      "https://mocki.io/v1/a41f3039-4c21-42bb-a886-d9a342a02ae9"
    );
    console.log("movie response func called", res);
    let result = res.data;
    dispatch(movieSuccess(result));
  } catch (err) {
    dispatch(movieError);
  }
};
