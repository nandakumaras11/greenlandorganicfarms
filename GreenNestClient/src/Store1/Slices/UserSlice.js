import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user_id: null
};
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginStatus: (state, action) => {
      return {...action.payload };
    },
  },
});

export const { setUserLoginStatus } = UserSlice.actions;

export default UserSlice.reducer;
