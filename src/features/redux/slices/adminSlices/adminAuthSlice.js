import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: false,
};

export const adminAuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAdminToken: (state) => {
      state.token = true;
    },
    removeAdminToken: (state) => {
      state.token = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAdminToken, removeAdminToken } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
