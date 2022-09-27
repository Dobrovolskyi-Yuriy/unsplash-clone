import { createListenerMiddleware } from "@reduxjs/toolkit";

import { logout, setAuth } from "redux/features/auth.slice";

import { login } from "redux/thunks/auth.thunks";
import { searchPhotos } from "redux/thunks/search.thunks";

import { selectIsAuthorized } from "redux/selectors/auth.selectors";

import { RootState } from "redux/types/common.types";
import { ActionTypes } from "redux/actionTypes";

import storage from "services/localstorage.service";
import {
  removeReqHeader,
  ReqHeaders,
  setReqHeader,
} from "services/network/api";
import {
  getQueryParamByKey,
  isMainPage,
  isQueryParamsExist,
} from "utils/network.util";

const authMiddleware = createListenerMiddleware();

authMiddleware.startListening({
  type: ActionTypes.StartApp,
  effect: (action, { dispatch, getState }) => {
    const token = storage.getToken();
    const token_type = storage.getTokeType();

    if (token && token_type) {
      setReqHeader(ReqHeaders.Authorization, `${token_type} ${token}`);
      dispatch(
        setAuth({
          access_token: storage.getToken(),
          token_type: storage.getTokeType(),
        })
      );
    }

    if (
      isMainPage() &&
      isQueryParamsExist(window.location.search, "code") &&
      !selectIsAuthorized(getState() as RootState)
    ) {
      dispatch(login(getQueryParamByKey(window.location.search, "code")!));
    }
  },
});

authMiddleware.startListening({
  actionCreator: login.fulfilled,
  effect: ({ payload: { token_type, access_token } }, { dispatch }) => {
    storage.setToken(access_token);
    storage.setTokenType(token_type);

    setReqHeader(ReqHeaders.Authorization, `${token_type} ${access_token}`);

    const [lastQuery] = storage.getSearchQueries();
    dispatch(searchPhotos(lastQuery));
  },
});

authMiddleware.startListening({
  actionCreator: logout,
  effect: () => {
    storage.removeToken();
    storage.removeTokenType();
    removeReqHeader(ReqHeaders.Authorization);
  },
});

export default authMiddleware;
