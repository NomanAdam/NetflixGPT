import React from "react";
import { logo } from "../utils/constant";

function Header() {
 return (
  <div className="absolute z-20 w-1/6  bg-linear-to-r from-black via-black/70 to-transparent">
   <img src={logo} alt="logo" />
  </div>
 );
}

export default Header;
