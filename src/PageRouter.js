import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import MyFavouritePage from "./pages/MyFavourite";
import NewMeetupsPage from "./pages/NewMeetups";

function PageRouter() {
  return (
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
  );
}

export default PageRouter;
