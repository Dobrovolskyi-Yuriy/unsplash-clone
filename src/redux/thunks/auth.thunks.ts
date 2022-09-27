import { createAsyncThunk } from "@reduxjs/toolkit";

import { requestLogin } from "services/network/auth";
import { LoginResponse } from "services/network/types";

import { ActionTypes } from "redux/actionTypes";

export const login = createAsyncThunk<LoginResponse, string>(
  ActionTypes.Login,
  async (code: string) => {
    const { data } = await requestLogin(code);
    return data;
  }
);
