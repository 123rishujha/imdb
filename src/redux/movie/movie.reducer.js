import * as types from "./movie.types";

const initialState = {
  loading: false,
  error: false,
  movies: []
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      
      case types.MOVIE_LOADING : {
          return {...state,loading:true,error:false}
      }
      
      case types.MOVIE_ERROR : {
          return {...state,loading:false,error:true}
      }
      
      case types.GET_MOVIE_SUCCESS : {
          return {...state,loading:false,error:false,movies:payload}
      }

    default: {
      return state;
    }
  }
};

