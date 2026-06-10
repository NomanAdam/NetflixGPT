import { Search } from "lucide-react";
import { useRef, useState } from "react";
import { genAI } from "../utils/genAI";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addSearchedMovies } from "../utils/gptSearchSlice";

const GptSearchBar = () => {
 const searchText = useRef(null);
 const [errorMessage, setErrorMessage] = useState("");
 const dispatch = useDispatch();

 const tmdbSearch = async (movie) => {
  try {
   const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
    options,
   );
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
  if (!searchText.current?.value) return;
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
  <div className="absolute top-24 left-0 right-0 mx-auto w-full max-w-2xl px-4 flex flex-col items-center z-10">
   <form
    className="w-full bg-white flex items-center p-2 rounded-full shadow-lg border border-gray-200 focus-within:ring-2 focus-within:ring-red-600 focus-within:border-transparent transition-all"
    onSubmit={(e) => e.preventDefault()}
   >
    {/* Search Icon */}
    <div className="pl-3 text-gray-400">
     <Search size={22} />
    </div>

    {/* Input Field */}
    <input
     className="bg-transparent text-gray-800 placeholder-gray-400 p-2 pl-3 grow outline-none text-base md:text-lg"
     type="text"
     placeholder="What would you like to watch today?"
     ref={searchText}
    />

    {/* Search Button */}
    <button
     className="bg-red-600 hover:bg-red-700 active:scale-95 transition-all px-6 py-2.5 rounded-full text-white font-semibold shadow-md text-sm md:text-base whitespace-nowrap"
     onClick={handleSearch}
    >
     Search
    </button>
   </form>

   {/* Error Message Display */}
   {errorMessage && (
    <p className="text-red-500 font-medium mt-2 text-sm bg-black/60 px-4 py-1 rounded">
     {errorMessage}
    </p>
   )}
  </div>
 );
};

export default GptSearchBar;
