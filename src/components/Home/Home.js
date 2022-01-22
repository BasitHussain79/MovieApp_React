import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/MovieApiKey";
import {
  addMovies,
  // fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Titans";
  const showText = "Marvel";
  useEffect(() => {
    const moviesData = async () => {
      const response = await movieApi.get(
        `?apiKey=${APIkey}&s=${movieText}&type=movie`,
      );
      dispatch(addMovies(response.data));
    };
    moviesData();
    // dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);
  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  );
};

export default Home;
