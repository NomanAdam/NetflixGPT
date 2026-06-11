import React from "react";
import { Play } from "lucide-react";

function VideoTitle({ title, overview }) {
 return (
  <div className="absolute top-15 sm:top-0 left-0 w-full h-screen text-white bg-linear-to-r from-black/70 via-black/30 to-transparent flex flex-col justify-center px-10 sm:px-14">
   <h2 className="text-2xl md:text-3xl lg:text-4xl  font-bold mb-4">{title}</h2>

   <p className="hidden md:block max-w-lg md:text-sm lg:text-lg mb-2">
    {overview}
   </p>

   <div className="flex">
    <button className="bg-white text-black px-2 md:px-6 py-1 md:py-3 font-bold rounded-lg mr-4 flex items-center gap-2 cursor-pointer hover:bg-opacity-80">
     <Play /> Play
    </button>

    <button className="bg-gray-500/70 px-2 md:px-6 py-1 md:py-3text-white font-bold rounded-lg cursor-pointer hover:bg-gray-500/50 hidden sm:block">
     More Info
    </button>
   </div>
  </div>
 );
}

export default VideoTitle;
