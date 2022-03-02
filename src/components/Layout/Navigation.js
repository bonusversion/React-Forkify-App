import { Fragment, useCallback, useEffect, useState } from "react";

import RecipeForm from "../RecipeForm/RecipeForm";
import BookmarksList from "./BookmarkList";

const Navigation = () => {
  const [showFormModal, setShowFormModal] = useState(false);

  const openFormHandler = () => {
    setShowFormModal(true);
  };

  const closeFormHandler = useCallback(() => {
    setShowFormModal(false);
  }, [setShowFormModal]);

  return (
    <Fragment>
      <nav className="nav">
        <ul className="nav__list">
          <li onClick={openFormHandler} className="nav__item">
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
            <BookmarksList />
          </li>
        </ul>
      </nav>
      {showFormModal && <RecipeForm onCloseForm={closeFormHandler} />}
    </Fragment>
  );
};

export default Navigation;
