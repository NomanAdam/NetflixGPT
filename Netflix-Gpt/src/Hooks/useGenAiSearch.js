import { useState } from "react";
import { genAI } from "../utils/genAI";
import { useDispatch } from "react-redux";
import { addSearchedMovies } from "../utils/gptSearchSlice";
import useTmdbSearch from "./useTmdbSearch";

const useGenAiSearch = () => {
 const [errorMessage, setErrorMessage] = useState("");
 const dispatch = useDispatch();
 const { tmdbSearch } = useTmdbSearch();
 const getErrorMessage = (err) => {
  if (err.message === "Failed to fetch" || err.message.includes("Network")) {
   return "No internet connection. Please check your network.";
  }

  return "Something went wrong. Please try again.";
 };
 const search = async (searchText) => {
  if (!searchText?.trim()) return;

  try {
   setErrorMessage("");

   const gptQuery = `
Act as a movie recommendation system.
Based on this query: "${searchText}"

Return exactly 5 movie names separated by commas.
`;

   const response = await genAI.models.generateContent({
    model: "gemini-2.5-flash",
    contents: gptQuery,
   });

   const movies = response.text
    .split(",")
    .map((m) => m.trim())
    .filter(Boolean);

   const results = await Promise.all(
    movies.map(async (movie) => {
     try {
      return await tmdbSearch(movie);
     } catch {
      return null;
     }
    }),
   );

   const filtered = results.filter(Boolean);

   if (!filtered.length) {
    throw new Error("No movies found");
   }

   dispatch(
    addSearchedMovies({
     movieResults: filtered,
     movieNames: movies,
    }),
   );
  } catch (err) {
   setErrorMessage(getErrorMessage(err));
  }
 };

 return { search, errorMessage };
};

export default useGenAiSearch;
