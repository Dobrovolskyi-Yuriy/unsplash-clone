import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { login } from "redux/thunks/auth.thunks";
import { AuthState } from "redux/types/storage.types";

const initialState: AuthState = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, { payload }: PayloadAction<AuthState>) => {
      Object.assign(state, payload);
    },
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      Object.assign(state, payload);
    });
  },
});

export const { logout, setAuth } = authSlice.actions;

export default authSlice;
