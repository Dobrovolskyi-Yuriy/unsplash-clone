import { RootState } from "redux/types/common.types";

export const selectIsAuthorized = (state: RootState): boolean =>
  !!state.auth.access_token;
