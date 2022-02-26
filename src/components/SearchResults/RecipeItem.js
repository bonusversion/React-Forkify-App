import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { useDispatch } from "react-redux";
import AJAX from "../../lib/api";
import { createRecipeObject } from "../../helpers";
import { recipeActions } from "../../store/recipe";

const RecipeItem = (props) => {
  const [curRecipeId, setCurRecipeId] = useState("");
  const { sendRequest, status, data, error } = useHttp(AJAX);
  const dispatch = useDispatch();
  const { setCurRecipe } = recipeActions;

  useEffect(() => {
    if (status === "completed" && data) {
      const recipe = createRecipeObject(data);
      dispatch(setCurRecipe(recipe));
    }
  }, [status, data, dispatch, setCurRecipe]);

  const clickRecipeHandler = () => {
    sendRequest({
      url: `https://forkify-api.herokuapp.com/api/v2/recipes/${props.id}?key=key=87d87f5c-0e59-44ec-b37e-233ec51c709f`,
    });
  };

  const linkStyle =
    "preview__link " +
    (curRecipeId === props.id ? "preview__link--active" : "");

  return (
    <li className="preview" onClick={clickRecipeHandler}>
      <Link to={`${props.id}`} className={linkStyle}>
        <figure className="preview__fig">
          <img src={props.image} alt="Test" />
        </figure>
        <div className="preview__data">
          <h4 className="preview__title">{props.title}</h4>
          <p className="preview__publisher">{props.publisher}</p>
          {/* <div className="preview__user-generated">
            <svg>
              <use href="./icons.svg#icon-user"></use>
            </svg>
          </div> */}
        </div>
      </Link>
    </li>
  );
};

export default RecipeItem;
