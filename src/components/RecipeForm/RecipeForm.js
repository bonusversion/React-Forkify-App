import { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import useHttp from "../../hooks/use-http";
import AJAX from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const RecipeForm = (props) => {
  const { sendRequest, data, status, error } = useHttp(AJAX);
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState(null);
  const [otherContent, setOtherContent] = useState(null);

  useEffect(() => {
    if (status === "pending") {
      const markup = <LoadingSpinner />;
      setOtherContent(markup);
    }

    if (status === "completed" && error) {
      const markup = (
        <div className="error">
          <div>
            <svg>
              <use href="./icons.svg#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>{error}</p>
        </div>
      );
      setOtherContent(markup);
    }

    if (status === "completed" && data) {
      const markup = (
        <div class="message">
          <div>
            <svg>
              <use href="./icons.svg#icon-smile"></use>
            </svg>
          </div>
          <p>Recipe was successfully uploaded {":)"}</p>
        </div>
      );
      setOtherContent(markup);
    }
  }, [status, data, error]);

  const closeFormHandler = () => {
    props.onCloseForm();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setShowForm(false);

    const form = e.target;
    const dataArr = [...new FormData(form)];
    const dataObj = Object.fromEntries(dataArr);
    setFormData(dataObj);

    const ingredients = dataArr
      .filter((data) => data[0].startsWith("ingredient") && data[1] !== "")
      .map((ing) => {
        const ingArr = ing[1].split(",").map((el) => el.trim());
        if (ingArr.length !== 3) {
          const markup = (
            <div className="error">
              <div>
                <svg>
                  <use href="./icons.svg#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>
                Wrong ingredient format! Please use the correct format {`:)`}
              </p>
            </div>
          );
          setOtherContent(markup);
          return;
        }
        const [quantity, unit, description] = ingArr;
        return {
          quantity: quantity ? +quantity : null,
          unit,
          description,
        };
      });

    if (ingredients.includes(undefined)) return;

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

  const backToFormHandler = () => {
    setShowForm(true);
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
            {showForm && (
              <Fragment>
                <div className="upload__column">
                  <h3 className="upload__heading">Recipe data</h3>
                  <label>Title</label>
                  <input
                    defaultValue={formData ? formData.title : ""}
                    required
                    name="title"
                    type="text"
                  />
                  <label>URL</label>
                  <input
                    defaultValue={formData ? formData.sourceUrl : ""}
                    required
                    name="sourceUrl"
                    type="text"
                  />
                  <label>Image URL</label>
                  <input
                    defaultValue={formData ? formData.image : ""}
                    required
                    name="image"
                    type="text"
                  />
                  <label>Publisher</label>
                  <input
                    defaultValue={formData ? formData.publisher : ""}
                    required
                    name="publisher"
                    type="text"
                  />
                  <label>Prep time</label>
                  <input
                    defaultValue={formData ? formData.cookingTime : ""}
                    required
                    name="cookingTime"
                    type="number"
                    placeholder="By minutes"
                  />
                  <label>Servings</label>
                  <input
                    defaultValue={formData ? formData.servings : ""}
                    required
                    name="servings"
                    type="number"
                  />
                </div>

                <div className="upload__column">
                  <h3 className="upload__heading">Ingredients</h3>

                  <label>Ingredient 1</label>
                  <input
                    defaultValue={
                      formData && formData["ingredient-1"]
                        ? formData["ingredient-1"]
                        : ""
                    }
                    type="text"
                    required
                    name="ingredient-1"
                    placeholder="Format: 'Quantity,Unit,Description'"
                  />
                  <label>Ingredient 2</label>
                  <input
                    defaultValue={
                      formData && formData["ingredient-2"]
                        ? formData["ingredient-2"]
                        : ""
                    }
                    type="text"
                    name="ingredient-2"
                    placeholder="Format: 'Quantity,Unit,Description'"
                  />
                  <label>Ingredient 3</label>
                  <input
                    defaultValue={
                      formData && formData["ingredient-3"]
                        ? formData["ingredient-3"]
                        : ""
                    }
                    type="text"
                    name="ingredient-3"
                    placeholder="Format: 'Quantity,Unit,Description'"
                  />
                  <label>Ingredient 4</label>
                  <input
                    defaultValue={
                      formData && formData["ingredient-4"]
                        ? formData["ingredient-4"]
                        : ""
                    }
                    type="text"
                    name="ingredient-4"
                    placeholder="Format: 'Quantity,Unit,Description'"
                  />
                  <label>Ingredient 5</label>
                  <input
                    defaultValue={
                      formData && formData["ingredient-5"]
                        ? formData["ingredient-5"]
                        : ""
                    }
                    type="text"
                    name="ingredient-5"
                    placeholder="Format: 'Quantity,Unit,Description'"
                  />
                  <label>Ingredient 6</label>
                  <input
                    defaultValue={
                      formData && formData["ingredient-6"]
                        ? formData["ingredient-6"]
                        : ""
                    }
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
              </Fragment>
            )}
            {!showForm && (
              <Fragment>
                {otherContent}
                {!(status === "pending") && (
                  <button
                    className="btn upload__btn"
                    onClick={backToFormHandler}
                  >
                    <svg>
                      <use href="./icons.svg#icon-upload-cloud"></use>
                    </svg>
                    <span>back</span>
                  </button>
                )}
              </Fragment>
            )}
          </form>
        </div>,
        document.getElementById("recipe-form-root")
      )}
    </Fragment>
  );
};

export default RecipeForm;
