import { LoginResponse } from "services/network/types";
import { Basic } from "unsplash-js/dist/methods/photos/types";

export type AuthState = Partial<LoginResponse>;

export type SearchState = {
  results: (Basic & { liked_by_user: boolean })[];
  total: number;
  total_pages: number;
  currentPage: number;
  query: string;
};
