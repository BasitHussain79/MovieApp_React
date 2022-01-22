import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSelectMovieorShow,
  getMovieorShow,
  removeAddMoviesOrShows,
} from "../../features/movies/movieSlice";
import classes from "./MovieDetail.module.css";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getMovieorShow);
  console.log(data);
  useEffect(() => {
    dispatch(fetchSelectMovieorShow(imdbID));
    return () => {
      dispatch(removeAddMoviesOrShows());
    };
  }, [dispatch, imdbID]);
  return (
    <>
      {Object.keys(data).length === 0 ? (
        <h4 style={{ textAlign: "center", margin: "2rem", color: "#fff" }}>
          Loading...
        </h4>
      ) : (
        <div className={classes["movie-section"]}>
          <div className={classes["section-left"]}>
            <div className={classes["movie-title"]}>{data.Title}</div>
            <div className={classes["movie-rating"]}>
              <span>
                IMDB Rating <i className='fas fa-star'></i> : {data.imdbRating}
              </span>
              <span>
                IMDB Votes <i className='fas fa-thumbs-up'></i> :{" "}
                {data.imdbVotes}
              </span>
              <span>
                Runtime <i className='fas fa-film'></i> : {data.Runtime}
              </span>
              <span>
                Year <i className='fas fa-calendar'></i> : {data.Year}
              </span>
            </div>
            <div className={classes["movie-plot"]}>{data.Plot}</div>
            <div className={classes["movie-info"]}>
              <table>
                <tbody>
                  <tr>
                    <th>Director</th>
                    <td>{data.Director}</td>
                  </tr>
                  <tr>
                    <th>Stars</th>
                    <td>{data.Actors}</td>
                  </tr>
                  <tr>
                    <th>Generes</th>
                    <td>{data.Genre}</td>
                  </tr>
                  <tr>
                    <th>Languages</th>
                    <td>{data.Language}</td>
                  </tr>
                  <tr>
                    <th>Awards</th>
                    <td>{data.Awards}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={classes["section-right"]}>
            <img src={data.Poster} alt={data.Title} />
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
