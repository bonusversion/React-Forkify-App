import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search";
import recipeReducer from "./recipe";
import bookmarkReducer from "./bookmark";

const store = configureStore({
  reducer: {
    search: searchReducer,
    recipe: recipeReducer,
    bookmark: bookmarkReducer,
  },
});

export default store;
