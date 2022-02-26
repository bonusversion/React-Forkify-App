import Figure from "./Figure";
import Detail from "./Detail";
import Ingredient from "./Ingredient";
import Direction from "./Direction";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Fragment, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import AJAX from "../../lib/api";
import { createRecipeObject } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { recipeActions } from "../../store/recipe";

const Specification = () => {
  const id = useParams().recipeId;
  const { sendRequest, status, data, error } = useHttp(AJAX);
  const dispatch = useDispatch();

  const recipe = useSelector((state) => state.recipe.curRecipe);
  let content;

  console.log(recipe);

  if (!recipe) {
    content = (
      <div className="message">
        <div>
          <svg>
            <use href="./icons.svg#icon-smile"></use>
          </svg>
        </div>
        <p>Start by searching for a recipe or an ingredient. Have fun!</p>
      </div>
    );
  }

  if (recipe) {
    content = (
      <Fragment>
        <Figure title={recipe.title} image={recipe.image} />
        <Detail cookTime={recipe.cookTime} servings={recipe.servings} />
        <Ingredient ingredients={recipe.ingredients} />
        <Direction publisher={recipe.publisher} sourceUrl={recipe.sourceUrl} />
      </Fragment>
    );
  }

  // useEffect(() => {
  //   sendRequest({
  //     url: `https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=key=87d87f5c-0e59-44ec-b37e-233ec51c709f`,
  //   });
  // }, [sendRequest]);

  // useEffect(() => {
  //   if (status === "completed" && data) {
  //     const recipe = createRecipeObject(data);
  //     dispatch(recipeActions.setCurRecipe(recipe));
  //   }
  // }, []);

  return <div className="recipe">{content}</div>;
};

export default Specification;
