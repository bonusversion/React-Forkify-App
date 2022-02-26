import Layout from "./components/Layout/Layout";
import RecipeList from "./components/SearchResults/RecipeList";
import { Route, Switch, Redirect } from "react-router-dom";
import RecipeDetail from "./pages/RecipeDetail";

function App() {
  return (
    <Layout>
      <RecipeList />
      <Switch>
        <Route path="/:recipeId" exact>
          <RecipeDetail />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
