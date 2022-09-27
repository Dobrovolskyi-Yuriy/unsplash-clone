import { search } from "unsplash-js/dist/internals";
import { Photos } from "unsplash-js/dist/methods/search/types/response";

import { api } from "services/network/api";

export const requestSearchPhotos = ({
  page = 1,
  perPage = 10,
  ...restOptions
}: search.SearchParams): Promise<Photos> =>
  api.get("/search/photos", { params: { page, perPage, ...restOptions } });
