import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

export const clientAuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setClientToken: (state) => {
      state.token = true;
    },
    removeClientToken: (state) => {
      state.token = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setClientToken, removeClientToken } = clientAuthSlice.actions;

export default clientAuthSlice.reducer;
