import React from "react";
import { Link } from "react-router-dom";
import classes from "./MovieCard.module.css";
const MovieCard = ({ data }) => {
  return (
    <div className={classes["card-item"]}>
      <Link to={`/movie/${data.imdbID}`}>
        <div className={classes["card-inner"]}>
          <div className={classes["card-top"]}>
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className={classes["card-bottom"]}>
            <h4>{data.Title}</h4>
            <p className={classes.year}>{data.Year}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
