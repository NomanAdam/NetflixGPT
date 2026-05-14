import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

function MainContainer() {
 const movies = useSelector((state) => state.movie.nowPlayingMovies);
 if (!movies) return null;
 const mainMovie = movies[1];
 const { original_title, overview, id } = mainMovie;
 return (
  <div className="relative h-screen">
   <VideoBackground movieId={id} />
   <VideoTitle title={original_title} overview={overview} />
  </div>
 );
}

export default MainContainer;
