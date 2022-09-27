import axios, { AxiosResponse } from "axios";

import { LoginResponse } from "services/network/types";

export const requestLogin = (
  code: string
): Promise<AxiosResponse<LoginResponse>> =>
  axios.post(`${process.env.REACT_APP_BASE_URL}/oauth/token`, {
    client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
    client_secret: process.env.REACT_APP_UNSPLASH_SECRET_KEY,
    redirect_uri: window.location.origin,
    code,
    grant_type: "authorization_code",
  });
