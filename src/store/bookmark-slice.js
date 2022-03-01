import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: { bookmarkedRecipes: [] },
  reducers: {
    addBookmark(state, action) {
      state.bookmarkedRecipes.push(action.payload);
    },
    deleteBookmark(state, action) {
      state.bookmarkedRecipes = state.bookmarkedRecipes.filter(
        (recipe) => recipe.id !== action.payload.id
      );
    },
  },
});

export const bookmarkActions = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
