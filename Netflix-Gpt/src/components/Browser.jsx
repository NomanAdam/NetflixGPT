import React, { useState } from "react";

function Browser() {
 const [dropDown, setDropDown] = useState(false);

 return (
  <div className="flex justify-between items-center p-4 bg-linear-to-r from-black via-black/70 to-transparent">
   <img
    src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-04-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
    alt="logo"
    className="h-10"
   />
   <div className="flex items-center gap-2 relative">
    <img
     src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
     alt="Profile"
     className="h-10 w-10"
    />

    <span>UserName</span>
    <button className="cursor-pointer" onClick={() => setDropDown(!dropDown)}>
     ⬇
    </button>
    {dropDown && (
     <button className="absolute top-full right-0 mt-2 bg-black text-white px-3 py-1">
      Sign out
     </button>
    )}
   </div>
  </div>
 );
}

export default Browser;
