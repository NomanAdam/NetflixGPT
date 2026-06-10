import { options } from "../utils/constant";

const useTmdbSearch = () => {
 const tmdbSearch = async (movie) => {
  const response = await fetch(
   `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
   options,
  );

  if (!response.ok) {
   throw new Error(`TMDB Error: ${response.status}`);
  }

  const json = await response.json();
  return json.results;
 };

 return { tmdbSearch };
};
export default useTmdbSearch;
