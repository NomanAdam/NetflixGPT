import { createSlice } from "@reduxjs/toolkit";
const initialState = {
 user: null,
 authLoading: true,
};
export const userSlice = createSlice({
 name: "user",
 initialState,
 reducers: {
  addUser: (state, action) => {
   state.user = action.payload;
   state.authLoading = false;
  },
  deleteUser: (state) => {
   state.user = null;
   state.authLoading = false;
  },
 },
});
export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
