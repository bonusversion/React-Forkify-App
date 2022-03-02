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
import { recipeActions } from "../../store/recipe-slice";
import LoadingSpinner from "../UI/LoadingSpinner";

const Specification = () => {
  const id = useParams().recipeId;
  const { sendRequest, status, data, error } = useHttp(AJAX);
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipe.curRecipe);
  const { setCurRecipe } = recipeActions;
  let content;

  useEffect(() => {
    sendRequest({
      url: `https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=87d87f5c-0e59-44ec-b37e-233ec51c709f`,
    });
  }, [id, sendRequest]);

  useEffect(() => {
    if (status === "completed" && data) {
      const recipe = createRecipeObject(data);
      dispatch(setCurRecipe(recipe));
    }
  }, [status, data, dispatch, setCurRecipe]);

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
        <Detail
          tag={recipe.key}
          id={recipe.id}
          cookingTime={recipe.cookingTime}
          servings={recipe.servings}
          bookmarked={recipe.bookmarked}
        />
        <Ingredient ingredients={recipe.ingredients} />
        <Direction publisher={recipe.publisher} sourceUrl={recipe.sourceUrl} />
      </Fragment>
    );
  }

  if (status === "pending") {
    content = <LoadingSpinner />;
  }

  if (status === "completed" && error) {
    content = (
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

  return <div className="recipe">{content}</div>;
};

export default Specification;
