import { useSelector } from "react-redux";
import RecipeItem from "../SearchResults/RecipeItem";
const BookmarksList = () => {
  let bookmarkList;
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
        tag={recipe.key}
        key={recipe.id}
        id={recipe.id}
        image={recipe.image}
        publisher={recipe.publisher}
        title={recipe.title}
      />
    ));
  }
  return (
    <div className="bookmarks">
      <ul className="bookmarks__list">{bookmarkList}</ul>
    </div>
  );
};

export default BookmarksList;
