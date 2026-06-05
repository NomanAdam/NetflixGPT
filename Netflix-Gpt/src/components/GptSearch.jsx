import React from "react";
import GptSearchBar from "./GptSearchBar";
import { bgImg } from "../utils/constant";

const GptSearch = () => {
 return (
  <div className="text-white ">
   <GptSearchBar />
   <img
    src={bgImg}
    alt="background img"
    className="w-full h-screen object-cover"
   />
  </div>
 );
};

export default GptSearch;
