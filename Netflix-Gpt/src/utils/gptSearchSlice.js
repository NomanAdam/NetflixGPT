import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 search: false,
 movieResults: null,
 movieNames: null,
};

export const searchSlice = createSlice({
 name: "GptSearch",
 initialState,
 reducers: {
  toggleSearch: (state) => {
   state.search = !state.search;
  },
  addSearchedMovies: (state, action) => {
   const { movieResults, movieNames } = action.payload;
   state.movieResults = movieResults;
   state.movieNames = movieNames;
  },
 },
});

export const { toggleSearch, addSearchedMovies } = searchSlice.actions;

export default searchSlice.reducer;
