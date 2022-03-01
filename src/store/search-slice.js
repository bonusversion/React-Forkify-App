import { createSlice } from "@reduxjs/toolkit";

const RES_PER_PAGE = 10;

const initialSearchState = {
  query: "",
  results: null,
  pageResults: null,
  page: 1,
  resultsPerPage: RES_PER_PAGE,
  loadStatus: false,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialSearchState,
  reducers: {
    loadSearchResults(state, action) {
      return {
        ...initialSearchState,
        query: action.payload.query,
        results: action.payload.results,
      };
    },
    getSearchResultPage(state, action) {
      const page = action.payload;

      const start = (page - 1) * state.resultsPerPage;
      const end = page * state.resultsPerPage;

      state.page = page;
      state.pageResults = state.results.slice(start, end); // [start, end)
    },
    setLoadStatus(state, action) {
      return { ...initialSearchState, loadStatus: action.payload };
    },
    setError(state, action) {
      return { ...initialSearchState, error: action.payload };
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
