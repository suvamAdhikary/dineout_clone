import { Route, Switch } from "react-router-dom";
import { PetFriendly } from "./PetFriendly/PetFriendly";

export default function Routes() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact></Route>

        <Route path="/petfriendly">
          <PetFriendly/>
        </Route>


        <Route path="/testing"></Route>

        <Route>404 Page not found</Route>
      </Switch>
    </div>
  );
}
