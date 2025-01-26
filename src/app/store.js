import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "../features/darkmode/darkModeSlice";
import categoryReducer from "../features/category/categorySlice";

export default configureStore({
  reducer: {
    darkMode: darkModeReducer,
    category: categoryReducer,
  },
});
