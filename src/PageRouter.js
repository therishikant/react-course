import { Route, Switch } from "react-router-dom";
import Layout from "./componants/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import MyFavouritePage from "./pages/MyFavourite";
import NewMeetupsPage from "./pages/NewMeetups";

function PageRouter() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage></AllMeetupsPage>
        </Route>
        <Route path="/fav">
          <MyFavouritePage></MyFavouritePage>
        </Route>
        <Route path="/new-meet">
          <NewMeetupsPage></NewMeetupsPage>
        </Route>
      </Switch>
    </Layout>
  );
}

export default PageRouter;
