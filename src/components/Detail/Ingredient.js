const Ingredient = () => {
  return (
    <div className="recipe__ingredients">
      <h2 className="heading--2">Recipe ingredients</h2>
      <ul className="recipe__ingredient-list">
        <li className="recipe__ingredient">
          <svg className="recipe__icon">
            <use href="src/img/icons.svg#icon-check"></use>
          </svg>
          <div className="recipe__quantity">1000</div>
          <div className="recipe__description">
            <span className="recipe__unit">g</span>
            pasta
          </div>
        </li>

        <li className="recipe__ingredient">
          <svg className="recipe__icon">
            <use href="src/img/icons.svg#icon-check"></use>
          </svg>
          <div className="recipe__quantity">0.5</div>
          <div className="recipe__description">
            <span className="recipe__unit">cup</span>
            ricotta cheese
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Ingredient;
