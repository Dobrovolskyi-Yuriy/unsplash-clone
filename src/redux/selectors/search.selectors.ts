import { RootState } from "redux/types/common.types";
import { SearchState } from "redux/types/storage.types";

export const selectSearchState = (state: RootState): SearchState =>
  state.search;
