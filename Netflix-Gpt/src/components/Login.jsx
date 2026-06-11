import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateData } from "../utils/ValidateForm";
import {
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
 updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { firebaseAuthError } from "../utils/firebaseAuthError";
import { bgImg } from "../utils/constant";

function Login() {
 const [isSignin, setIsSignIn] = useState(true);
 const [isMessage, setIsSetMessage] = useState(null);

 const name = useRef(null);
 const email = useRef(null);
 const password = useRef(null);

 // ✅ Converts error object into a readable string

 const handleFormData = () => {
  const errors = validateData(
   isSignin ? "" : name.current.value,
   email.current.value,
   password.current.value,
   isSignin,
  );

  // 🔥 show ONLY ONE error (priority order)
  const firstError = errors?.email || errors?.password || errors?.name || null;

  setIsSetMessage(firstError);

  if (errors) return;

  if (!isSignin) {
   createUserWithEmailAndPassword(
    auth,
    email.current.value,
    password.current.value,
   )
    .then(async (userCredential) => {
     await updateProfile(userCredential.user, {
      displayName: name.current.value,
     });

     await userCredential.user.reload();
    })
    .catch((error) => {
     setIsSetMessage(firebaseAuthError(error));
    });
  } else {
   signInWithEmailAndPassword(
    auth,
    email.current.value,
    password.current.value,
   ).catch((error) => {
    setIsSetMessage(firebaseAuthError(error));
   });
  }
 };

 const ToggleSingInForm = () => {
  setIsSignIn(!isSignin);
  setIsSetMessage(null); // ✅ clear errors on toggle
 };

 return (
  <div>
   <Header />
   <div className="relative">
    <img
     src={bgImg}
     alt="background image"
     className="w-full h-screen object-cover"
    />
    <div className="absolute inset-0 flex items-center justify-center top">
     <div className="bg-black/70 p-8 rounded w-100 flex flex-col gap-4 text-white">
      <h2 className="font-bold text-2xl">{isSignin ? "Sign In" : "Sign Up"}</h2>
      {!isSignin && (
       <input
        ref={name}
        type="text"
        placeholder="Full Name"
        className="bg-[#1c2532] p-3"
       />
      )}
      <input
       ref={email}
       type="email"
       placeholder="Email"
       className="bg-[#1c2532] p-3"
      />
      <input
       ref={password}
       type="password"
       placeholder="Password"
       className="bg-[#1c2532] p-3"
      />
      {/* ✅ Only renders when there's a message */}
      {isMessage && <p className="text-red-500">{isMessage}</p>}
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
