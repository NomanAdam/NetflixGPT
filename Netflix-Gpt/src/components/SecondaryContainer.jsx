import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function SecondaryContainer() {
 const movies = useSelector((state) => state.movie);

 if (!movies) return null;
 return (
  <div className="bg-black ">
   <div className="relative -mt-20 md:-mt-26 lg:-mt-38">
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
   </div>
  </div>
 );
}

export default SecondaryContainer;
