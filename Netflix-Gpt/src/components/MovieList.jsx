import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
 return (
  <div className="text-white mb-8 md:mb-12">
   <h2 className="text-xl md:text-2xl font-bold mb-4 px-4 md:px-10">{title}</h2>

   <div className="flex gap-2 md:gap-4 px-4 md:px-10 overflow-x-scroll hide-scrollbar">
    {movies?.map((movie) => (
     <MovieCard key={movie.id} poster={movie.poster_path} />
    ))}
   </div>
  </div>
 );
};

export default MovieList;
