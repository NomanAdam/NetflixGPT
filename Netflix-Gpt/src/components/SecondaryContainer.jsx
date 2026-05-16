import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function SecondaryContainer() {
 const movies = useSelector((state) => state.movie);

 if (!movies) return null;
 return (
  <div className="bg-black ">
   <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
   <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
  </div>
 );
}

export default SecondaryContainer;
