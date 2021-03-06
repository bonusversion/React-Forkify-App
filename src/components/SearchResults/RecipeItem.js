import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { useDispatch, useSelector } from "react-redux";
import AJAX from "../../lib/api";
import { createRecipeObject } from "../../helpers";
import { recipeActions } from "../../store/recipe-slice";

const RecipeItem = (props) => {
  const [isHere, setIsHere] = useState(false);
  let curRecipeId;
  const curRecipe = useSelector((state) => state.recipe.curRecipe);
  if (curRecipe) {
    curRecipeId = curRecipe.id;
  }

  const linkStyle =
    "preview__link " +
    (curRecipeId === props.id ? "preview__link--active" : "");

  return (
    <li className="preview">
      <Link to={`${props.id}`} className={linkStyle}>
        <figure className="preview__fig">
          <img src={props.image} alt="Test" />
        </figure>
        <div className="preview__data">
          <h4 className="preview__title">{props.title}</h4>
          <p className="preview__publisher">{props.publisher}</p>
          {props.tag && (
            <div className="preview__user-generated">
              <svg>
                <use href="./icons.svg#icon-user"></use>
              </svg>
            </div>
          )}
        </div>
      </Link>
    </li>
  );
};

export default RecipeItem;
