import { Route, Switch } from "react-router-dom";
import MainNavigation from "./componants/layout/MainNavigation";
import AllMeetupsPage from "./pages/AllMeetups";
import MyFavouritePage from "./pages/MyFavourite";
import NewMeetupsPage from "./pages/NewMeetups";

function PageRouter() {
  return (
    <div>
    <MainNavigation></MainNavigation>
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
    </div>
  );
}

export default PageRouter;
