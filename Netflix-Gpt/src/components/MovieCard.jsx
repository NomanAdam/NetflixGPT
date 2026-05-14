import React from "react";
import { Poster_Url } from "../utils/constant";

function MovieCard({ poster }) {
 return (
  <div className=" w-60 shrink-0 mt-4 ">
   <img src={Poster_Url + poster} alt="Poster" />
  </div>
 );
}
export default MovieCard;
