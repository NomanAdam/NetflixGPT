import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { logo, profile } from "../utils/constant";
import { useNowPlayingMoives } from "../Hooks/useNowPlayingMoive";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../Hooks/usePopularMovies";
import { toggleSearch } from "../utils/gptSearchSlice";
import GptSearch from "./GptSearch";
function Browser() {
 const [dropDown, setDropDown] = useState(false);
 const dispatch = useDispatch();
 const user = useSelector((state) => state.user);
 const searchPage = useSelector((state) => state.search.search);
 const navigate = useNavigate();
 const handleSignOut = () => {
  signOut(auth)
   .then(() => {
    navigate("/");
   })
   .catch((error) => {
    console.log(error);
   });
 };
 const handleSearch = () => {
  dispatch(toggleSearch());
 };
 useNowPlayingMoives();
 usePopularMovies();

 return (
  <>
   <div className="fixed top-0 left-0 z-50 w-full flex justify-between items-center p-4 bg-linear-to-b from-black to-transparent">
    <img src={logo} alt="logo" className="h-12 " />
    <div className="flex items-center gap-2 relative">
     <button
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer "
      onClick={handleSearch}
     >
      GPT Search
     </button>

     <img src={profile} alt="Profile" className="h-10 w-10" />

     <span className="text-white">{user?.user?.displayName}</span>
     <button className="cursor-pointer" onClick={() => setDropDown(!dropDown)}>
      ⬇
     </button>
     {dropDown && (
      <button
       className="absolute cursor-pointer top-full right-0 mt-2 bg-black text-white px-3 py-1"
       onClick={handleSignOut}
      >
       Sign out
      </button>
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
