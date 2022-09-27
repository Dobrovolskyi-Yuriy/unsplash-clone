import { createSlice } from "@reduxjs/toolkit";

import { likePhoto, unlikePhoto } from "redux/thunks/photos.thunks";
import { searchPhotos, searchPhotosNext } from "redux/thunks/search.thunks";
import { SearchState } from "redux/types/storage.types";

const initialState: SearchState = {
  query: "",
  currentPage: 1,
  total_pages: 0,
  total: 0,
  results: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchPhotos.fulfilled, (state, { payload, meta }) => {
      Object.assign(state, payload);
      state.currentPage = 1;
      state.query = meta.arg;
    });
    builder.addCase(searchPhotosNext.fulfilled, (state, { payload }) => {
      const { results, ...restPayload } = payload;
      state.results.push(...(results as any));
      Object.assign(state, restPayload);
      state.currentPage = state.currentPage + 1;
    });
    builder.addCase(likePhoto.fulfilled, (state, { meta }) => {
      const likedPhotoIndex = state.results.findIndex(
        ({ id }) => id === meta.arg
      );
      state.results[likedPhotoIndex].liked_by_user = true;
    });
    builder.addCase(unlikePhoto.fulfilled, (state, { meta }) => {
      const unlikedPhotoIndex = state.results.findIndex(
        ({ id }) => id === meta.arg
      );
      state.results[unlikedPhotoIndex].liked_by_user = false;
    });
  },
});

export default searchSlice;
