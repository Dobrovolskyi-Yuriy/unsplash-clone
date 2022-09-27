import axios from "axios";
import {
  rejectTransformer,
  resolveTransformer,
} from "services/network/interceptors";

export enum ReqHeaders {
  Authorization = "Authorization",
}

export const api = axios.create({
  method: "get",
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params.client_id = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
  return config;
});

api.interceptors.response.use(resolveTransformer, rejectTransformer);

export const setReqHeader = (key: string, value: string): void => {
  api.defaults.headers.common[key] = value;
};

export const removeReqHeader = (key: string): void => {
  delete api.defaults.headers.common[key];
};
