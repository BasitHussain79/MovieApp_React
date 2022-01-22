import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { settings } from "../../common/SliderSettings/sliderSettings";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "./../MovieCard/MovieCard";
import classes from "./MovieListing.module.css";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className='movies-error'>
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className='shows-error'>
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div className={classes["movie-wrapper"]}>
      <div className='movies'>
        <h2>Movies</h2>
        <div>
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
      </div>

      <div className={classes.shows}>
        <h2>Shows</h2>
        <div>
          <Slider {...settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
