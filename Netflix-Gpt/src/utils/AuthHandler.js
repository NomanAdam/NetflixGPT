import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, deleteUser } from "../utils/userSlice";

function AuthHandler() {
 const navigate = useNavigate();
 const dispatch = useDispatch();

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
    navigate("/browser");
   } else {
    dispatch(deleteUser());
    navigate("/");
   }
  });

  return () => unsubscribe();
 }, []);

 return null;
}

export default AuthHandler;
