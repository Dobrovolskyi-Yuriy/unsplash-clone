import { createListenerMiddleware } from "@reduxjs/toolkit";

import { searchPhotos } from "redux/thunks/search.thunks";
import storage from "services/localstorage.service";

const searchMiddleware = createListenerMiddleware();

searchMiddleware.startListening({
  actionCreator: searchPhotos.fulfilled,
  effect: ({ meta: { arg } }) => {
    storage.addSearchQuery(arg);
  },
});

export default searchMiddleware;
