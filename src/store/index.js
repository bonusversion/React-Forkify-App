import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search-slice";
import recipeReducer from "./recipe-slice";
import bookmarkReducer from "./bookmark-slice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    recipe: recipeReducer,
    bookmark: bookmarkReducer,
  },
});

export default store;
