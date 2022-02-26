const Detail = (props) => {
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

        <div className="recipe__info-buttons">
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
      <button className="btn--round">
        <svg className="">
          <use href="/icons.svg#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>
  );
};

export default Detail;
