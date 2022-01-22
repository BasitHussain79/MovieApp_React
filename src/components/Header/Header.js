import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import userProfileImage from "../../images/userprofile.png";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const [searchInput, setsearchInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(searchInput);
    dispatch(fetchAsyncMovies(searchInput));
    dispatch(fetchAsyncShows(searchInput));
    setsearchInput("");
  };
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <Link to='/'>Movie App</Link>
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            value={searchInput}
            onChange={(e) => setsearchInput(e.target.value)}
          />
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className={classes.userImage}>
        <img src={userProfileImage} alt='user' />
      </div>
    </nav>
  );
};

export default Header;
