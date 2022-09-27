import { FC, SyntheticEvent } from "react";
import { Box, Button } from "@mui/material";

import { ImageList, SearchSection } from "components";

import { logout } from "redux/features/auth.slice";
import { searchPhotos, searchPhotosNext } from "redux/thunks/search.thunks";

import { selectIsAuthorized } from "redux/selectors/auth.selectors";
import { selectSearchState } from "redux/selectors/search.selectors";

import { useAppDispatch, useAppSelector } from "hooks/redux.hooks";

import storage from "services/localstorage.service";
import { generateOAuthUrl } from "utils/network.util";

import { useStyles } from "containers/MainScreen/MainScreen.styles";
import { likePhoto, unlikePhoto } from "redux/thunks/photos.thunks";

const MainScreen: FC = () => {
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector(selectIsAuthorized);
  const { results, currentPage, total_pages, query } =
    useAppSelector(selectSearchState);

  const hasMore = currentPage < total_pages;

  const handleSearch = (value: string) => (e: SyntheticEvent) =>
    dispatch(searchPhotos(value));
  const handleLogout = () => dispatch(logout());
  const handleLike = (id: string) => dispatch(likePhoto(id));
  const handleUnlike = (id: string) => dispatch(unlikePhoto(id));
  const getMore = () => dispatch(searchPhotosNext(query));

  const { container, header } = useStyles();

  return (
    <Box className={container}>
      <Box className={header}>
        <SearchSection
          defaultValue={query}
          label="Search photos"
          autocompleteItems={storage.getSearchQueries()}
          btnTitle="Search"
          onSearch={handleSearch}
        />
        {isAuthorized ? (
          <Button variant="contained" color="secondary" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button variant="outlined" href={generateOAuthUrl()}>
            Login
          </Button>
        )}
      </Box>
      {results.length ? (
        <ImageList
          images={results}
          hasMore={hasMore}
          showItemBar={isAuthorized}
          onLike={handleLike}
          onUnlike={handleUnlike}
          getMore={getMore}
        />
      ) : null}
    </Box>
  );
};

export default MainScreen;
