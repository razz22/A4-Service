import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

export const adminAuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAdminToken: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    removeAdminToken: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAdminToken, removeAdminToken } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
