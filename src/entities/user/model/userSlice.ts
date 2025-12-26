import { createSlice } from "@reduxjs/toolkit/react";

const initialState = {
  isLoggedIn: false,
  userId: null,
  accessToken: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    onSignIn(state, action) {
      const { userId, accessToken } = action.payload;

      state.isLoggedIn = true;
      state.userId = userId;
      state.accessToken = accessToken;
    },

    onSignOut(state) {
      state.isLoggedIn = false;
      state.userId = null;
      state.accessToken = null;
    },

    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
  },
});

export const { onSignIn, onSignOut, setAccessToken } = userSlice.actions;

export default userSlice.reducer;
