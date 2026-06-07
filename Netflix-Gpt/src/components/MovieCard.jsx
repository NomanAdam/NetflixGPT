import React from "react";
import { Poster_Url } from "../utils/constant";

function MovieCard({ poster }) {
 if (!poster) return null;
 return (
  <div className=" w-48  shrink-0 mt-4 ">
   <img
    src={Poster_Url + poster}
    className="rounded-md hover:scale-105 transition-transform duration-300 cursor-pointer"
    alt="Poster"
   />
  </div>
 );
}
export default MovieCard;
