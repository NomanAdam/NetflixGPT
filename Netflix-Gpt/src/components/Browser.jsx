import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { auth } from "../utils/firebase";
import { logo, profile } from "../utils/constant";
import { useNowPlayingMoives } from "../Hooks/useNowPlayingMoive";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../Hooks/usePopularMovies";
import { toggleSearch } from "../utils/gptSearchSlice";
import GptSearch from "./GptSearch";

function Browser() {
 const [signOutError, setSignOutError] = useState(null);
 const [dropDown, setDropDown] = useState(false);
 const [toggleText, setToggleText] = useState(false);
 const dispatch = useDispatch();

 // ✅ Fix 1: match the new slice shape { user, authLoading }
 const user = useSelector((state) => state.user.user);
 const authLoading = useSelector((state) => state.user.authLoading);

 const searchPage = useSelector((state) => state.search.search);

 const handleSignOut = () => {
  signOut(auth).catch(() => {
   // AuthHandler's onAuthStateChanged handles navigation automatically
   setSignOutError("Something went wrong while signing out. Please try again.");
   setTimeout(() => setSignOutError(null), 3000);
  });
 };

 const handleSearch = () => {
  dispatch(toggleSearch());
  setToggleText(!toggleText);
 };

 useNowPlayingMoives();
 usePopularMovies();

 // ✅ Fix 2: guard against both loading and no user
 if (authLoading || !user) return null;

 return (
  <>
   <div className="fixed top-0 left-0 z-50 w-full flex justify-between items-center p-4 bg-linear-to-b from-black to-transparent">
    <img src={logo} alt="logo" className="h-8 sm:h-12" />
    <div className="flex items-center gap-2 relative">
     <button
      className="bg-red-600 hover:bg-red-700 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer"
      onClick={handleSearch}
     >
      {toggleText ? "Home" : "Search"}
     </button>

     <img src={profile} alt="Profile" className="hidden sm:block h-10 w-10" />

     {/* ✅ Fix 3: user.displayName, not user?.user?.displayName */}
     <span className="hidden sm:block text-white">{user?.displayName}</span>

     {/* <button className="cursor-pointer" onClick={() => setDropDown(!dropDown)}>
      ⬇
     </button> */}
     <button
      className="text-gray-500 hover:text-gray-700 focus:outline-none p-2 rounded-md"
      onClick={() => setDropDown(!dropDown)}
     >
      <svg
       className="h-6 w-6"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor"
       strokeWidth="2"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
       />
      </svg>
     </button>
     {dropDown && (
      <button
       className="absolute cursor-pointer top-full right-0 mt-2 bg-black text-white text-xs sm:text-base px-2 sm:px-3 py-1 whitespace-nowrap z-50 rounded"
       onClick={handleSignOut}
      >
       Sign out
      </button>
     )}

     {/* ✅ Fix 4: removed duplicate <p> error at top, kept only this one */}
     {signOutError && (
      <div className="fixed top-20 right-4 bg-red-600 text-white p-3 rounded shadow-lg z-9999">
       {signOutError}
      </div>
     )}
    </div>
   </div>

   <div>
    {searchPage ? (
     <GptSearch />
    ) : (
     <div>
      <MainContainer />
      <SecondaryContainer />
     </div>
    )}
   </div>
  </>
 );
}

export default Browser;
