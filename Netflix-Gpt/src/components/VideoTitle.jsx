import React from "react";
import { Play } from "lucide-react";

function VideoTitle({ title, overview }) {
 return (
  <div className="absolute top-0 left-0 w-full h-screen text-white bg-gradient-to-r from-black/70 via-black/30 to-transparent flex flex-col justify-center px-14">
   <h2 className="text-5xl font-bold mb-4">{title}</h2>

   <p className="w-1/3 text-lg mb-6">{overview}</p>

   <div className="flex">
    <button className="bg-white text-black px-8 py-4 font-bold rounded-lg mr-4 flex items-center gap-2 cursor-pointer hover:bg-opacity-80">
     <Play /> Play
    </button>

    <button className="bg-gray-500/70 px-8 py-4 text-white font-bold rounded-lg cursor-pointer hover:bg-gray-500/50">
     More Info
    </button>
   </div>
  </div>
 );
}

export default VideoTitle;
