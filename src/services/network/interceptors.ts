import { AxiosError, AxiosResponse } from "axios";

export function resolveTransformer(
  response: AxiosResponse
): Promise<AxiosResponse["data"]> {
  return Promise.resolve(response?.data);
}

export function rejectTransformer(error: AxiosError): Promise<AxiosError> {
  return Promise.reject(error);
}
