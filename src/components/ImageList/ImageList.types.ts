import { ImageListProps as MUImageListProps } from "@mui/material";
import { Basic } from "unsplash-js/dist/methods/photos/types";

export type ImageListProps = Omit<MUImageListProps, "children"> & {
  images: (Basic & { liked_by_user: boolean })[];
  hasMore: boolean;
  showItemBar: boolean;
  getMore: () => void;
  onLike: (id: string) => void;
  onUnlike: (id: string) => void;
};
