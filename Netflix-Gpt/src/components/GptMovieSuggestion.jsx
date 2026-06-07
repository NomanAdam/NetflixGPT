import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
 const { movieNames, movieResults } = useSelector((state) => state.search);

 if (!movieNames?.length) return null;

 return (
  <div className="mx-auto mt-45 mb-12 max-w-[95%] rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-xl md:p-8">
   <div className="space-y-8">
    {movieNames.map((movieName, index) => (
     <div
      key={movieName}
      className="rounded-xl bg-white/5 p-4 transition-all duration-300 hover:bg-white/10"
     >
      <MovieList title={movieName} movies={movieResults?.[index] || []} />
     </div>
    ))}
   </div>
  </div>
 );
};

export default GptMovieSuggestion;
