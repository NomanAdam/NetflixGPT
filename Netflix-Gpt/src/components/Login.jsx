import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateData } from "../utils/ValidateForm";

function Login() {
 const [isSignin, setIsSignIn] = useState(true);
 const [isMessage, setIsSetMessage] = useState("");

 const name = useRef(null);
 const email = useRef(null);
 const password = useRef(null);

 const handleFormData = () => {
  // validation
  let message;
  if (isSignin) {
   message = validateData(email.current.value, password.current.value);
  } else {
   message = validateData(
    name.current.value,
    email.current.value,
    password.current.value,
   );
  }
  setIsSetMessage(message);
 };
 const ToggleSingInForm = () => {
  setIsSignIn(!isSignin);
 };

 return (
  <div>
   <Header />
   <div className="relative">
    <img
     src="https://assets.nflxext.com/ffe/siteui/vlv3/ba53094c-3e3b-4789-94a6-baac10310f07/web/PK-en-20260420-TRIFECTA-perspective_b7c92ecc-b94e-4055-badf-6424ce6910a6_small.jpg"
     alt="background image"
     className="w-full h-screen object-cover"
    />
    <div className="absolute inset-0 flex items-center justify-center top ">
     {/*inset==> how far the element is from all edges of its parent
      absolute inset-0  ==> Make this div cover the entire background image */}

     <div className="bg-black/70 p-8 rounded w-100 flex flex-col gap-4 text-white ">
      <h2 className="font-bold text-2xl">
       {" "}
       {isSignin ? "Sign In" : "Sign Up"}
      </h2>
      {!isSignin && (
       <input
        ref={name}
        type="text"
        placeholder="Full Name"
        className="bg-[#1c2532] p-3 "
       />
      )}
      <input
       ref={email}
       type="Email"
       placeholder="Email"
       className="bg-[#1c2532] p-3 "
      />
      <input
       ref={password}
       type="password"
       placeholder="Password"
       className="bg-[#1c2532] p-3"
      />
      <p className=" text-red-500">{isMessage}</p>
      <button
       className="bg-[#e50914] p-2 rounded font-bold"
       onClick={handleFormData}
      >
       {isSignin ? "Sign In" : "Sign Up"}
      </button>
      <p onClick={ToggleSingInForm} className="cursor-pointer">
       {isSignin ? "New to Netflix?" : "Already have an account?"}{" "}
       {isSignin ? "Sign Up" : "Sign In"}
      </p>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Login;
