import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataList: [],
  loading: false,
  error: null,
};

const artSlice = createSlice({
  name: "artList",
  initialState,
  reducers: {
    ArtListLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    ArtListSuccess: (state, action) => {
      state.loading = false;
      state.dataList = action.payload;
      state.error = null;
    },

    ArtListFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { ArtListLoading, ArtListSuccess, ArtListFailure } =
  artSlice.actions;

export default artSlice.reducer;
