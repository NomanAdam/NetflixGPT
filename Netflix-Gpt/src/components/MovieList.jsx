import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
 return (
  <div className=" text-white py-">
   <div className="text-4xl mb-3 ml-5">{title}</div>
   <div className="flex  gap-4 m-5 overflow-x-scroll hide-scrollbar">
    {movies?.map((movie) => (
     <MovieCard poster={movie.poster_path} key={movie.id} />
    ))}
   </div>
  </div>
 );
};

export default MovieList;
