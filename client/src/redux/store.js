import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice.js";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
