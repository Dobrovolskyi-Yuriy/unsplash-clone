import { createAsyncThunk } from "@reduxjs/toolkit";

import { ActionTypes } from "redux/actionTypes";
import { requestLikePhoto, requestUnlikePhoto } from "services/network/photos";
import {
  LikePhotoResponse,
  UnlikePhotoResponse,
} from "services/network/types/response/photos.types";

export const likePhoto = createAsyncThunk<LikePhotoResponse, string>(
  ActionTypes.LikePhoto,
  async (photoId: string) => await requestLikePhoto(photoId)
);

export const unlikePhoto = createAsyncThunk<UnlikePhotoResponse, string>(
  ActionTypes.UnlikePhoto,
  async (photoId: string) => await requestUnlikePhoto(photoId)
);
