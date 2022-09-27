import { configureStore } from "@reduxjs/toolkit";

import authSlice from "redux/features/auth.slice";
import searchSlice from "redux/features/search.slice";

import authMiddleware from "redux/middlewares/auth.middleware";
import searchMiddleware from "redux/middlewares/search.middleware";

import { ActionTypes } from "redux/actionTypes";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [searchSlice.name]: searchSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      authMiddleware.middleware,
      searchMiddleware.middleware
    ),
});

store.dispatch({ type: ActionTypes.StartApp });
