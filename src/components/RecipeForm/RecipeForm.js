import { Fragment } from "react";
import ReactDOM from "react-dom";
import useHttp from "../../hooks/use-http";
import AJAX from "../../lib/api";

const RecipeForm = (props) => {
  const { sendRequest, data, status, error } = useHttp(AJAX);
  const closeFormHandler = () => {
    props.onCloseForm();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const dataArr = [...new FormData(form)];
    const dataObj = Object.fromEntries(dataArr);

    const ingredients = dataArr
      .filter((data) => data[0].startsWith("ingredient") && data[1] !== "")
      .map((ing) => {
        const ingArr = ing[1].split(",").map((el) => el.trim());
        if (ingArr.length !== 3) {
          //...
        }
        const [quantity, unit, description] = ingArr;
        return {
          quantity: quantity ? +quantity : null,
          unit,
          description,
        };
      });

    const uploadData = {
      title: dataObj.title,
      publisher: dataObj.publisher,
      source_url: dataObj.sourceUrl,
      image_url: dataObj.image,
      servings: +dataObj.servings,
      cooking_time: +dataObj.cookingTime,
      ingredients: ingredients,
    };

    const requestData = {
      url: "https://forkify-api.herokuapp.com/api/v2/recipes?key=87d87f5c-0e59-44ec-b37e-233ec51c709f",
      uploadData,
    };

    sendRequest(requestData);
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className="overlay"></div>,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <div className="add-recipe-window">
          <button className="btn--close-modal" onClick={closeFormHandler}>
            &times;
          </button>
          <form className="upload" onSubmit={submitHandler}>
            <div className="upload__column">
              <h3 className="upload__heading">Recipe data</h3>
              <label>Title</label>
              <input required name="title" type="text" />
              <label>URL</label>
              <input required name="sourceUrl" type="text" />
              <label>Image URL</label>
              <input required name="image" type="text" />
              <label>Publisher</label>
              <input required name="publisher" type="text" />
              <label>Prep time</label>
              <input
                required
                name="cookingTime"
                type="number"
                placeholder="By minutes"
              />
              <label>Servings</label>
              <input required name="servings" type="number" />
            </div>

            <div className="upload__column">
              <h3 className="upload__heading">Ingredients</h3>
              <label>Ingredient 1</label>
              <input
                type="text"
                required
                name="ingredient-1"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 2</label>
              <input
                type="text"
                name="ingredient-2"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 3</label>
              <input
                type="text"
                name="ingredient-3"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 4</label>
              <input
                type="text"
                name="ingredient-4"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 5</label>
              <input
                type="text"
                name="ingredient-5"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 6</label>
              <input
                type="text"
                name="ingredient-6"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
            </div>

            <button className="btn upload__btn">
              <svg>
                <use href="./icons.svg#icon-upload-cloud"></use>
              </svg>
              <span>Upload</span>
            </button>
          </form>
        </div>,
        document.getElementById("recipe-form-root")
      )}
    </Fragment>
  );
};

export default RecipeForm;
