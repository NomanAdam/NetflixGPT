import { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../utils/moivesSlice";
export const useNowPlayingMoives = () => {
 const dispatch = useDispatch();
 const NowPlayingMovies = useSelector((state) => state.movie.NowPlayingMovies);
 const getNowPlayingMoives = async () => {
  const data = await fetch(
   "https://api.themoviedb.org/3/movie/now_playing?page=1",
   options,
  );
  const json = await data.json();
  dispatch(addMovies(json.results));
 };
 useEffect(() => {
  !NowPlayingMovies && getNowPlayingMoives();
 }, []);
};
