import { Search } from "lucide-react";
import { useRef } from "react";

import useGenAiSearch from "../Hooks/useGenAiSearch";

const GptSearchBar = () => {
 const searchText = useRef(null);

 const { search, errorMessage } = useGenAiSearch();
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
     onClick={() => search(searchText.current.value)}
    >
     Search
    </button>
   </form>

   {errorMessage && (
    <p className="text-red-500 mt-3 text-sm font-medium">{errorMessage}</p>
   )}
  </div>
 );
};

export default GptSearchBar;
