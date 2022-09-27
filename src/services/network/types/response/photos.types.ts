import { Basic as Photo } from "unsplash-js/dist/methods/photos/types";
import { Basic as User } from "unsplash-js/dist/methods/users/types";

export type LikePhotoResponse = {
  photo: Photo & { liked_by_user: boolean };
  user: User;
};

export type UnlikePhotoResponse = {
  photo: Photo;
  user: User;
};
