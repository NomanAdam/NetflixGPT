import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import AuthHandler from "../utils/AuthHandler";
import Browser from "./Browser";
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
      <Browser />
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
