import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
  name: "recipe",
  initialState: { curRecipe: null },
  reducers: {
    setCurRecipe(state, action) {
      state.curRecipe = action.payload;
    },
  },
});

export const recipeActions = recipeSlice.actions;
export default recipeSlice.reducer;
