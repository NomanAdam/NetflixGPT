import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 nowPlayingMovies: null,
 trailerVideo: null,
 popularMovies: null,
 upCommingMovies: null,
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
  addPopularMovies: (state, action) => {
   state.popularMovies = action.payload;
  },
 },
});
export const { addMovies, addTrailerVideo, addPopularMovies } =
 movieSlice.actions;
export default movieSlice.reducer;
