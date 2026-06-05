import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moivesSlice";
import searchReducer from "./gptSearchSlice";
export const store = configureStore({
 reducer: {
  user: userReducer,
  movie: movieReducer,
  search: searchReducer,
 },
});
