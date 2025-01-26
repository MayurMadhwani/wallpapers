import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
  name: "darkMode",

  initialState: {
    value: false,
  },

  reducers: {
    update: (state) => {
      state.value = !state.value;
    },
  },
});

export const { update } = darkModeSlice.actions;

export default darkModeSlice.reducer;
