import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: [],
  reducers: {},
});

export const bookmarkActions = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
