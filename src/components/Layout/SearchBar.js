import { Fragment, useRef } from "react";
import { searchActions } from "../../store/search-slice";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const queryInputRef = useRef();
  const dispatch = useDispatch();
  const { setQuery } = searchActions;

  const setQueryHandler = (e) => {
    e.preventDefault();
    const enteredQuery = queryInputRef.current.value;
    if (!enteredQuery) return;
    dispatch(setQuery(enteredQuery));
  };

  return (
    <Fragment>
      <form className="search" onSubmit={setQueryHandler}>
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
    </Fragment>
  );
};

export default SearchBar;
