import RecipeItem from "./RecipeItem";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";
import { Fragment, useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import useHttp from "../../hooks/use-http";
import { searchActions } from "../../store/search-slice";
import AJAX from "../../lib/api";

const RecipeList = () => {
  const query = useSelector((state) => state.search.query);
  const pageRecipes = useSelector((state) => state.search.pageResults);

  const { loadSearchResults, getSearchResultPage } = searchActions;
  const dispatch = useDispatch();
  const { sendRequest, status, data, error } = useHttp(AJAX);
  let content;

  useEffect(() => {
    if (query) {
      sendRequest({
        url: `https://forkify-api.herokuapp.com/api/v2/recipes/?search=${query}&key=87d87f5c-0e59-44ec-b37e-233ec51c709f`,
      });
    }
  }, [query, sendRequest]);

  useEffect(() => {
    if (status === "completed" && data) {
      const searchData = {
        results: data.recipes,
      };
      dispatch(loadSearchResults(searchData));
      dispatch(getSearchResultPage(1));
    }
  }, [status, data, dispatch, loadSearchResults, getSearchResultPage]);

  if (!pageRecipes) {
    content = null;
  }

  if (pageRecipes && pageRecipes.length === 0) {
    content = (
      <div className="error">
        <div>
          <svg>
            <use href="./icons.svg#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>No recipes found for your query! Please try again {`;)`}</p>
      </div>
    );
  }

  if (pageRecipes && pageRecipes.length !== 0) {
    content = pageRecipes.map((recipe) => (
      <RecipeItem
        key={recipe.id}
        tag={recipe.key}
        id={recipe.id}
        image={recipe["image_url"]}
        publisher={recipe.publisher}
        title={recipe.title}
      />
    ));
  }

  if (status === "pending") {
    content = <LoadingSpinner />;
  }

  if (status === "completed" && error) {
    content = (
      <div className="error">
        <div>
          <svg>
            <use href="./icons.svg#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>{error}</p>
      </div>
    );
  }
  return (
    <div className="search-results">
      <Fragment>
        <ul className="results">{content}</ul>
        <Pagination />
      </Fragment>
    </div>
  );
};

export default RecipeList;
