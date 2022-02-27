import { Fraction } from "Fractional";

const Ingredient = (props) => {
  return (
    <div className="recipe__ingredients">
      <h2 className="heading--2">Recipe ingredients</h2>
      <ul className="recipe__ingredient-list">
        {props.ingredients.map((ingredient, index) => (
          <li key={index} className="recipe__ingredient">
            <svg className="recipe__icon">
              <use href="./icons.svg#icon-check"></use>
            </svg>
            <div className="recipe__quantity">
              {ingredient.quantity
                ? new Fraction(ingredient.quantity).toString()
                : ""}
            </div>
            <div className="recipe__description">
              <span className="recipe__unit">{ingredient.unit}</span>
              {ingredient.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredient;
