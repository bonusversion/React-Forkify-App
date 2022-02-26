import RecipeItem from "./RecipeItem";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";

const RecipeList = () => {
  const loadedRecipes = useSelector((state) => state.search.results);
  if (loadedRecipes.length === 0) return null;

  console.log(loadedRecipes);
  const recipesList = loadedRecipes.map((recipe) => (
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
    </div>
  );
};

export default RecipeList;
