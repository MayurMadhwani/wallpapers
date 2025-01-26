import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    value: "All",
  },

  reducers: {
    updateCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateCategory } = categorySlice.actions;

export default categorySlice.reducer;
