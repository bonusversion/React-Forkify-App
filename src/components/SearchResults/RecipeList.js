import RecipeItem from "./RecipeItem";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";
import { Fragment, useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";

const RecipeList = () => {
  const pageRecipes = useSelector((state) => state.search.pageResults);
  const isLoading = useSelector((state) => state.search.loadStatus);
  const error = useSelector((state) => state.search.error);
  let recipesList;

  if (!pageRecipes) {
    recipesList = null;
  }

  if (pageRecipes && pageRecipes.length === 0) {
    recipesList = (
      <div class="error">
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
    recipesList = pageRecipes.map((recipe) => (
      <RecipeItem
        key={recipe.id}
        id={recipe.id}
        image={recipe["image_url"]}
        publisher={recipe.publisher}
        title={recipe.title}
      />
    ));
  }

  if (error) {
    recipesList = (
      <div class="error">
        <div>
          <svg>
            <use href="./icons.svg#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>{error}</p>
      </div>
    );
  }

  if (isLoading) {
    recipesList = <LoadingSpinner />;
  }

  return (
    <div className="search-results">
      <Fragment>
        <ul className="results">{recipesList}</ul>
        <Pagination />
      </Fragment>
    </div>
  );
};

export default RecipeList;
