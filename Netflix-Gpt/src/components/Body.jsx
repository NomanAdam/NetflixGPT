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
     <Browser />
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
