import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const MovieList = () => {
 const movies = useSelector((state) => state.movie.nowPlayingMovies);
 console.log(movies);
 if (!movies) return null;

 return (
  <div className="  text-white">
   <div className="text-4xl mb-3 ">NowPlaying</div>
   <div className="flex  gap-4 m-5 overflow-auto">
    {movies.map((movie) => (
     <div key={movie.id} className="">
      <MovieCard poster={movie.poster_path} />
     </div>
    ))}
   </div>
  </div>
 );
};

export default MovieList;
