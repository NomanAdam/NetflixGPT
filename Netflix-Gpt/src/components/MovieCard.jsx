import React from "react";
import { Poster_Url } from "../utils/constant";

function MovieCard({ poster }) {
 if (!poster) return null;

 return (
  <div className="w-32 md:w-40 lg:w-48 shrink-0 mt-2 md:mt-4">
   <img
    src={Poster_Url + poster}
    className="w-full rounded-md hover:scale-105 transition-transform duration-300 cursor-pointer"
    alt="Poster"
   />
  </div>
 );
}
export default MovieCard;
