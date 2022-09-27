import { createAsyncThunk } from "@reduxjs/toolkit";
import { Photos } from "unsplash-js/dist/methods/search/types/response";

import { selectSearchState } from "redux/selectors/search.selectors";
import { RootState } from "redux/types/common.types";
import { ActionTypes } from "redux/actionTypes";

import { requestSearchPhotos } from "services/network/search";

export const searchPhotos = createAsyncThunk<Photos, string>(
  ActionTypes.SearchPhotos,
  async (query: string) => await requestSearchPhotos({ query })
);

export const searchPhotosNext = createAsyncThunk<
  Photos,
  string,
  { state: RootState }
>(ActionTypes.SearchPhotosNext, async (query: string, { getState }) => {
  const { currentPage } = selectSearchState(getState());
  return await requestSearchPhotos({ query, page: currentPage + 1 });
});
