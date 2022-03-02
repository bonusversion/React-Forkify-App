import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: { bookmarkedRecipes: [] },
  reducers: {
    addBookmark(state, action) {
      state.bookmarkedRecipes.push(action.payload);

      localStorage.setItem(
        "bookmarks",
        JSON.stringify(state.bookmarkedRecipes)
      );
    },
    deleteBookmark(state, action) {
      state.bookmarkedRecipes = state.bookmarkedRecipes.filter(
        (recipe) => recipe.id !== action.payload.id
      );
      localStorage.setItem(
        "bookmarks",
        JSON.stringify(state.bookmarkedRecipes)
      );
    },
    loadBookmark(state, action) {
      const storage = localStorage.getItem("bookmarks");
      if (storage) state.bookmarkedRecipes = JSON.parse(storage);
    },
  },
});

export const bookmarkActions = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
