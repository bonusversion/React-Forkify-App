import { useEffect, useRef, useState } from "react";
import { searchActions } from "../../store/search";
import { useDispatch, useSelector } from "react-redux";
import AJAX from "../../lib/api";
import useHttp from "../../hooks/use-http";

const SearchBar = () => {
  const queryInputRef = useRef();
  const dispatch = useDispatch();
  const { sendRequest, status, data, error } = useHttp(AJAX);
  const [enteredQuery, setEnteredQuery] = useState("");

  const { loadSearchResults, getSearchResultPage } = searchActions;

  const loadSearchResultsHandler = async (e) => {
    e.preventDefault();

    setEnteredQuery(queryInputRef.current.value);
    if (!enteredQuery) return;

    await sendRequest({
      url: `https://forkify-api.herokuapp.com/api/v2/recipes/?search=${enteredQuery}&key=87d87f5c-0e59-44ec-b37e-233ec51c709f`,
    });
  };

  useEffect(() => {
    if (status === "completed" && data) {
      const searchData = {
        query: enteredQuery,
        results: data.recipes,
      };
      dispatch(loadSearchResults(searchData));
    }
  }, [status, data, enteredQuery, dispatch, loadSearchResults]);

  useEffect(() => {
    if (status === "completed" && data) {
      dispatch(getSearchResultPage(1));
    }
  }, [status, data, dispatch, getSearchResultPage]);

  return (
    <form className="search" onSubmit={loadSearchResultsHandler}>
      <input
        ref={queryInputRef}
        type="text"
        className="search__field"
        placeholder="Search over 1,000,000 recipes..."
      />
      <button className="btn search__btn">
        <svg className="search__icon">
          <use href="./icons.svg#icon-search"></use>
        </svg>
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchBar;
