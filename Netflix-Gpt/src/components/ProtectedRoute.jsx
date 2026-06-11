// ProtectedRoute.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
 const user = useSelector((state) => state.user.user);
 const authLoading = useSelector((state) => state.user.authLoading);

 if (authLoading) {
  // Block rendering until Firebase resolves auth — prevents flash to /browser
  return (
   <div className="flex items-center justify-center min-h-screen bg-black">
    <div className="text-white text-xl">Loading...</div>
   </div>
  );
 }

 if (!user) {
  return <Navigate to="/" replace />;
 }

 return children;
};

export default ProtectedRoute;
