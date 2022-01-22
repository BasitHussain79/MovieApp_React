import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/MovieApiKey";

//Movies
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIkey}&s=${term}&type=movie`,
    );
    return response.data;
  },
);

//Shows
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIkey}&s=${term}&type=series`,
    );
    return response.data;
  },
);

//get movies by id
export const fetchSelectMovieorShow = createAsyncThunk(
  "movies/selectMovieorShow",
  async (id) => {
    const response = await movieApi.get(
      `?apiKey=${APIkey}&i=${id}&Plot='full'`,
    );
    return response.data;
  },
);

const initialState = {
  movies: {},
  shows: {},
  selectMovieorShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeAddMoviesOrShows: (state) => {
      state.selectMovieorShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, shows: payload };
    },
    [fetchSelectMovieorShow.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, selectMovieorShow: payload };
    },
  },
});

export const { addMovies, removeAddMoviesOrShows } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMovieorShow = (state) => state.movies.selectMovieorShow;
export default movieSlice.reducer;
