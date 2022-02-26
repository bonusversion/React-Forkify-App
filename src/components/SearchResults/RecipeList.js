import RecipeItem from "./RecipeItem";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../../store/search";
import Pagination from "./Pagination";

const RecipeList = () => {
  const allRecipes = useSelector((state) => state.search.results);
  const pageRecipes = useSelector((state) => state.search.pageResults);
  //   const resultsPerPage = useSelector((state) => state.search.resultsPerPage);
  //   const page = useSelector((state) => state.search.page);
  if (allRecipes.length === 0) return null;

  //   const dispatch = useDispatch();
  //   const start = (page - 1) * resultsPerPage;
  //   const end = page * resultsPerPage;
  //   const pageRecipes = allRecipes.slice(start, end);

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
      <ul className="results">{recipesList}</ul>
      <Pagination />
    </div>
  );
};

export default RecipeList;
