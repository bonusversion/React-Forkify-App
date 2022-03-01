import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import RecipeItem from "../SearchResults/RecipeItem";
import RecipeForm from "../RecipeForm/RecipeForm";

const Navigation = () => {
  let bookmarkList;
  const [showForm, setShowForm] = useState();
  const bookmarkedRecipes = useSelector(
    (state) => state.bookmark.bookmarkedRecipes
  );

  if (bookmarkedRecipes.length === 0) {
    bookmarkList = (
      <div className="message">
        <div>
          <svg>
            <use href="/icons.svg#icon-smile"></use>
          </svg>
        </div>
        <p>No bookmarks yet. Find a nice recipe and bookmark it :{")"}</p>
      </div>
    );
  } else {
    bookmarkList = bookmarkedRecipes.map((recipe) => (
      <RecipeItem
        key={recipe.id}
        id={recipe.id}
        image={recipe.image}
        publisher={recipe.publisher}
        title={recipe.title}
      />
    ));
  }

  const toggleFormHandler = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <Fragment>
      <nav className="nav">
        <ul className="nav__list">
          <li onClick={toggleFormHandler} className="nav__item">
            <button className="nav__btn nav__btn--add-recipe">
              <svg className="nav__icon">
                <use href="./icons.svg#icon-edit"></use>
              </svg>
              <span>Add recipe</span>
            </button>
          </li>
          <li className="nav__item">
            <button className="nav__btn nav__btn--bookmarks">
              <svg className="nav__icon">
                <use href="./icons.svg#icon-bookmark"></use>
              </svg>
              <span>Bookmarks</span>
            </button>
            <div className="bookmarks">
              <ul className="bookmarks__list">{bookmarkList}</ul>
            </div>
          </li>
        </ul>
      </nav>
      {showForm && <RecipeForm onCloseForm={toggleFormHandler} />}
    </Fragment>
  );
};

export default Navigation;
