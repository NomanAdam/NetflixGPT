import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import AuthHandler from "../utils/AuthHandler";
import Browser from "./Browser";
import ProtectedRoute from "./ProtectedRoute";
function Body() {
 const appRouter = createBrowserRouter([
  {
   path: "/",
   element: (
    <>
     <AuthHandler />
     <Login />
    </>
   ),
  },
  {
   path: "/browser",
   element: (
    <>
     <AuthHandler />
     <div className="bg-black min-h-screen">
      <ProtectedRoute>
       <Browser />
      </ProtectedRoute>
     </div>
    </>
   ),
  },
 ]);
 return (
  <div>
   <RouterProvider router={appRouter} />
  </div>
 );
}

export default Body;
