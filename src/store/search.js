import { createSlice } from "@reduxjs/toolkit";

const RES_PER_PAGE = 10;

const initialSearchState = {
  query: "",
  results: [],
  page: 1,
  resultsPerPage: RES_PER_PAGE,
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialSearchState,
  reducers: {
    loadSearchResults(state, action) {
      state.query = action.payload.query;
      state.results = action.payload.results;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
