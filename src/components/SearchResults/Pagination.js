import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../../store/search";

const Pagination = () => {
  const dispatch = useDispatch();
  const curPage = useSelector((state) => state.search.page);
  const resultsPerPage = useSelector((state) => state.search.resultsPerPage);
  const allRecipes = useSelector((state) => state.search.results);
  const numPages = Math.ceil(allRecipes.length / resultsPerPage);

  const goToPageHandler = (e) => {
    const btn = e.target.closest(".btn--inline");

    if (!btn) return;
    const goToPage = +btn.dataset.goto;
    dispatch(searchActions.getSearchResultPage(goToPage));
  };

  return (
    <div className="pagination" onClick={goToPageHandler}>
      {curPage !== 1 && curPage <= numPages && (
        <button
          className="btn--inline pagination__btn--prev"
          data-goto={curPage - 1}
        >
          <svg className="search__icon">
            <use href="./icons.svg#icon-arrow-left"></use>
          </svg>
          <span>Page {curPage - 1}</span>
        </button>
      )}
      {curPage < numPages && (
        <button
          className="btn--inline pagination__btn--next"
          data-goto={curPage + 1}
        >
          <span>Page {curPage + 1}</span>
          <svg className="search__icon">
            <use href="./icons.svg#icon-arrow-right"></use>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Pagination;
