import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 nowPlayingMovies: null,
 trailerVideo: null,
};

export const movieSlice = createSlice({
 name: "movie",
 initialState,
 reducers: {
  addMovies: (state, action) => {
   state.nowPlayingMovies = action.payload;
  },
  addTrailerVideo: (state, action) => {
   state.trailerVideo = action.payload;
  },
 },
});
export const { addMovies, addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;
