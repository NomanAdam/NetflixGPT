import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moivesSlice";
export const store = configureStore({
 reducer: {
  user: userReducer,
  movie: movieReducer,
 },
});
