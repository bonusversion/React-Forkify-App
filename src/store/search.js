import { createSlice } from "@reduxjs/toolkit";

const RES_PER_PAGE = 10;

const initialSearchState = {
  query: "",
  results: [],
  pageResults: [],
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
    getSearchResultPage(state, action) {
      const page = action.payload;
      const start = (page - 1) * state.resultsPerPage;

      const end = page * state.resultsPerPage;
      state.page = page;
      state.pageResults = state.results.slice(start, end); // [start, end)
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
