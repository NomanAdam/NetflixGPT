import React, { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moivesSlice";

function useMovieTrailer(movieId) {
 const dispatch = useDispatch();
 const fetchVideo = async () => {
  const data = await fetch(
   `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
   options,
  );
  const json = await data.json();
  const trailers = json.results.filter((video) => video.type === "Trailer");
  const trailer = trailers[0];
  dispatch(addTrailerVideo(trailer));
 };
 useEffect(() => {
  if (!movieId) return;

  fetchVideo();
 }, []);
}

export default useMovieTrailer;
