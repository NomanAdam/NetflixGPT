import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { logo, profile } from "../utils/constant";
import { useNowPlayingMoives } from "../Hooks/useNowPlayingMoive";
import MainContainer from "./MainContainer";
function Browser() {
 const [dropDown, setDropDown] = useState(false);
 const user = useSelector((state) => state.user);

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
 useNowPlayingMoives();

 return (
  <>
   <div className="absolute top-0 left-0 z-50 w-full flex justify-between items-center p-4 bg-linear-to-b from-black/80 to-transparent">
    <img src={logo} alt="logo" className="h-10" />
    <div className="flex items-center gap-2 relative">
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
   <MainContainer />
  </>
 );
}

export default Browser;
