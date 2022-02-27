import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
  name: "recipe",
  initialState: { curRecipe: null },
  reducers: {
    setCurRecipe(state, action) {
      state.curRecipe = action.payload;
    },
    updateServings(state, action) {
      const updateTo = action.payload;
      state.curRecipe.ingredients.forEach((ing) => {
        ing.quantity = (ing.quantity * updateTo) / state.curRecipe.servings;
      });
      state.curRecipe.servings = updateTo;
    },
  },
});

export const recipeActions = recipeSlice.actions;
export default recipeSlice.reducer;
