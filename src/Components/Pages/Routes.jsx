import { Route, Switch } from "react-router-dom";
import RestaurantPage from "./Restaurant/RestaurantPage";
import { PetFriendly } from "./PetFriendly/PetFriendly";
import { Confirmation } from "./ConfirmationPage/Confirmation";
import { MainHome } from "./Home/MainHome";
import ScrollToTop from "../../Utils/ScrollToTop";
export default function Routes() {
  return (
    <div className="App">
      <ScrollToTop/>
        <Switch>
          <Route path="/" exact>
            <MainHome />
          </Route>

          <Route path="/dynamic/:id">
            <PetFriendly />
          </Route>
          <Route path="/testing">
            <RestaurantPage />
          </Route>
          <Route path="/confirm">
            <Confirmation />
          </Route>
          <Route>404 Page not found</Route>
          <Route>404 Page not found</Route>
        </Switch>
    </div>
  );
}
