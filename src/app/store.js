import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../feature/themeSlice";

export const store = configureStore({
  reducer: {
    themeReducer,
  },
});
