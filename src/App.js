import Layout from "./components/Layout/Layout";
import RecipeList from "./components/SearchResults/RecipeList";
import { Route, Switch } from "react-router-dom";
import RecipeDetail from "./pages/RecipeDetail";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bookmarkActions } from "./store/bookmark-slice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bookmarkActions.loadBookmark());
  }, [dispatch]);

  return (
    <Layout>
      <RecipeList />
      <Switch>
        <Route path="/" exact>
          <div className="recipe">
            <div className="message">
              <div>
                <svg>
                  <use href="./icons.svg#icon-smile"></use>
                </svg>
              </div>
              <p>Start by searching for a recipe or an ingredient. Have fun!</p>
            </div>
          </div>
        </Route>
        <Route path="/:recipeId" exact>
          <RecipeDetail />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
