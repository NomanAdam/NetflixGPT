import { Search } from "lucide-react";
import { useRef, useState } from "react";
import { genAI } from "../utils/genAI";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addSearchedMovies } from "../utils/gptSearchSlice";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearchBar = () => {
 const searchText = useRef(null);
 const [errorMessage, setErrorMessage] = useState("");
 const dispatch = useDispatch();
 const tmdbSearch = async (movie) => {
  const response = await fetch(
   `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
   options,
  );
  try {
   if (!response.ok) {
    throw new Error(`TMDB Error: ${response.status}`);
   }

   const json = await response.json();
   return json.results;
  } catch (err) {
   setErrorMessage(err.message);
  }
 };

 const handleSearch = async () => {
  try {
   const gptQuery = `
Act as a movie recommendation system.

Based on this query: "${searchText.current.value}"

Recommend exactly 5 movies.

Rules:
- Return only movie names.
- Separate them with commas.
- No numbering.
- No explanation.
- No extra text.

Example:
Inception, Interstellar, The Matrix, Tenet, Shutter Island
`;
   const response = await genAI.models.generateContent({
    model: "gemini-2.5-flash",
    contents: gptQuery,
   });
   const genResult = response.text.split(",");

   const pormiseArray = genResult.map((movie) => tmdbSearch(movie.trim()));
   const genAImovies = await Promise.all(pormiseArray);
   dispatch(
    addSearchedMovies({ movieResults: genAImovies, movieNames: genResult }),
   );
  } catch (err) {
   setErrorMessage(err.message);
  }
 };
 return (
  <div className="absolute top-24 w-full grid place-items-center">
   <form
    className="bg-black p-5 rounded-lg"
    onSubmit={(e) => e.preventDefault()}
   >
    <input
     className="bg-white text-base text-gray-500 p-2 w-90"
     type="text"
     placeholder="What would you like to watch today?"
     ref={searchText}
    />

    <button
     className="bg-red-700 p-2 ml-2 rounded-xl text-white"
     onClick={handleSearch}
    >
     Search
    </button>
    {errorMessage}
   </form>
  </div>
 );
};

export default GptSearchBar;
