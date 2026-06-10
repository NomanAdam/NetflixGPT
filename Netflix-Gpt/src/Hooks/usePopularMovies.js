import { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moivesSlice";
export const usePopularMovies = () => {
 const dispatch = useDispatch();
 const popularMovies = useSelector((state) => state.movie.popularMovies);
 const getPopularMovies = async () => {
  const data = await fetch(
   "https://api.themoviedb.org/3/movie/popular?page=1",
   options,
  );
  const json = await data.json();

  dispatch(addPopularMovies(json.results));
 };
 useEffect(() => {
  !popularMovies && getPopularMovies();
 }, []);
};
