import RecipeItem from "./RecipeItem";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";
import { Fragment } from "react";

const RecipeList = () => {
  const pageRecipes = useSelector((state) => state.search.pageResults);

  const recipesList = pageRecipes.map((recipe) => (
    <RecipeItem
      key={recipe.id}
      id={recipe.id}
      image={recipe["image_url"]}
      publisher={recipe.publisher}
      title={recipe.title}
    />
  ));
  return (
    <div className="search-results">
      {pageRecipes.length !== 0 && (
        <Fragment>
          <ul className="results">{recipesList}</ul>
          <Pagination />
        </Fragment>
      )}
    </div>
  );
};

export default RecipeList;
