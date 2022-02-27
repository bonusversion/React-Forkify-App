import { useDispatch } from "react-redux";
import { recipeActions } from "../../store/recipe";
import { useSelector } from "react-redux";
import { bookmarkActions } from "../../store/bookmark";
const Detail = (props) => {
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipe.curRecipe);
  const bookmarkedRecipes = useSelector(
    (state) => state.bookmark.bookmarkedRecipes
  );

  const isBookmarked = bookmarkedRecipes.find((recipe) => {
    return recipe.id === props.id;
  });

  const changeServingsHandler = (e) => {
    const btn = e.target.closest(".btn--update-servings");
    if (!btn) return;
    const { updateTo } = btn.dataset;
    if (+updateTo > 0) {
      dispatch(recipeActions.updateServings(+updateTo));
    }
  };

  const bookMarkHandler = (e) => {
    if (isBookmarked) {
      dispatch(bookmarkActions.deleteBookmark(recipe));
    } else {
      dispatch(bookmarkActions.addBookmark(recipe));
    }
  };

  return (
    <div className="recipe__details">
      <div className="recipe__info">
        <svg className="recipe__info-icon">
          <use href="/icons.svg#icon-clock"></use>
        </svg>
        <span className="recipe__info-data recipe__info-data--minutes">
          {props.cookTime}
        </span>
        <span className="recipe__info-text">minutes</span>
      </div>
      <div className="recipe__info">
        <svg className="recipe__info-icon">
          <use href="/icons.svg#icon-users"></use>
        </svg>
        <span className="recipe__info-data recipe__info-data--people">
          {props.servings}
        </span>
        <span className="recipe__info-text">servings</span>

        <div className="recipe__info-buttons" onClick={changeServingsHandler}>
          <button
            className="btn--tiny btn--update-servings"
            data-update-to={props.servings - 1}
          >
            <svg>
              <use href="/icons.svg#icon-minus-circle"></use>
            </svg>
          </button>
          <button
            className="btn--tiny btn--update-servings"
            data-update-to={props.servings + 1}
          >
            <svg>
              <use href="/icons.svg#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div className="recipe__user-generated">
        <svg>
          <use href="/icons.svg#icon-user"></use>
        </svg>
      </div>
      <button className="btn--round" onClick={bookMarkHandler}>
        <svg className="">
          <use
            href={`/icons.svg#icon-bookmark${isBookmarked ? "-fill" : ""}`}
          ></use>
        </svg>
      </button>
    </div>
  );
};

export default Detail;
