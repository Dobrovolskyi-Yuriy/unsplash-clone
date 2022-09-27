import { api } from "services/network/api";
import {
  LikePhotoResponse,
  UnlikePhotoResponse,
} from "services/network/types/response/photos.types";

export const requestLikePhoto = (id: string): Promise<LikePhotoResponse> =>
  api.post(`/photos/${id}/like`);

export const requestUnlikePhoto = (id: string): Promise<UnlikePhotoResponse> =>
  api.delete(`/photos/${id}/like`);
