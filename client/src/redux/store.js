import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice.js";
import artSlice from "./slices/artSlice.js";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    art: artSlice,
  },
});
