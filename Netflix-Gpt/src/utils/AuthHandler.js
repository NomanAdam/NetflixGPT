import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, deleteUser } from "../utils/userSlice";

function AuthHandler() {
 const navigate = useNavigate();
 const dispatch = useDispatch();

 // AuthHandler.jsx
 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
   if (user) {
    dispatch(
     addUser({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
     }),
    );
    navigate("/browser", { replace: true }); // 👈 replace, don't push
   } else {
    dispatch(deleteUser());
    navigate("/", { replace: true }); // 👈 replace clears /browser from stack
   }
  });

  return () => unsubscribe();
 }, []);
 return null;
}

export default AuthHandler;
