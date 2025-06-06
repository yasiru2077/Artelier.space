import { createSlice } from "@reduxjs/toolkit";

const loadUserFromStorage = () => {
  try {
    const userData = localStorage.getItem("userData");
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error("Error loading user data from localStorage:", error);
    localStorage.removeItem("userData"); // Clean up corrupted data
    return null;
  }
};

const saveUserToStorage = (userData) => {
  try {
    localStorage.setItem("userData", JSON.stringify(userData));
  } catch (error) {
    console.error("Error saving user data to localStorage:", error);
  }
};

const removeUserFromStorage = () => {
  try {
    localStorage.removeItem("userData");
  } catch (error) {
    console.error("Error removing user data from localStorage:", error);
  }
};

const storedUser = loadUserFromStorage();

const initialState = {
  user: storedUser,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;

      saveUserToStorage(action.payload);
    },

    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
      state.user = null;

      removeUserFromStorage();
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;

       removeUserFromStorage();
    },

    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, clearError } =
  authSlice.actions;

export default authSlice.reducer;
