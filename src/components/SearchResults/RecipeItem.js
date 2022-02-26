import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeItem = (props) => {
  const [curRecipeId, setCurRecipeId] = useState("");

  //   useEffect(() => {
  //     curRecipeId = window.location.pathname.slice(1);
  //   });

  const clickRecipeHandler = () => {
    setCurRecipeId(window.location.pathname.slice(1));
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
          <div className="preview__user-generated">
            <svg>
              <use href="./icons.svg#icon-user"></use>
            </svg>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default RecipeItem;
