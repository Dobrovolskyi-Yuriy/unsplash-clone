import { FC } from "react";
import {
  IconButton,
  ImageList as MUImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import InfiniteScroll from "react-infinite-scroll-component";

import Loader from "components/Loader/Loader";
import { ImageListProps } from "components/ImageList/ImageList.types";

import { useStyles } from "components/ImageList/ImageList.styles";

const ImageList: FC<ImageListProps> = ({
  hasMore,
  showItemBar,
  images = [],
  getMore,
  onLike,
  onUnlike,
  ...props
}) => {
  const { container } = useStyles();

  const handleLike = (id: string) => () => onLike(id);
  const handleUnlike = (id: string) => () => onUnlike(id);

  return images.length ? (
    <InfiniteScroll
      dataLength={images.length}
      next={getMore}
      hasMore={hasMore}
      loader={<Loader />}
      scrollableTarget="scrolableDiv"
      className={container}
    >
      <MUImageList variant="woven" cols={3} gap={8} {...props}>
        {images.map(({ id, urls, alt_description, liked_by_user }: any) => (
          <ImageListItem key={id}>
            <img src={urls.regular} alt={alt_description as string} />
            {showItemBar ? (
              <ImageListItemBar
                position="top"
                actionPosition="left"
                actionIcon={
                  liked_by_user ? (
                    <IconButton
                      sx={{ color: "red" }}
                      onClick={handleUnlike(id)}
                    >
                      <Favorite />
                    </IconButton>
                  ) : (
                    <IconButton
                      sx={{ color: "white" }}
                      onClick={handleLike(id)}
                    >
                      <FavoriteBorder />
                    </IconButton>
                  )
                }
                sx={{ background: "none" }}
              />
            ) : null}
          </ImageListItem>
        ))}
      </MUImageList>
    </InfiniteScroll>
  ) : (
    <></>
  );
};

export default ImageList;
