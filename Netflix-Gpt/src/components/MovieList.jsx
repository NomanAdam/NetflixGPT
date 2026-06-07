import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
 return (
  <div className="text-white mb-12">
   <h2 className="text-2xl font-bold mb-4 px-10">{title}</h2>

   <div className="flex gap-4 px-10 overflow-x-scroll hide-scrollbar">
    {movies?.map((movie) => (
     <MovieCard key={movie.id} poster={movie.poster_path} />
    ))}
   </div>
  </div>
 );
};

export default MovieList;
