import { Route, Switch } from "react-router-dom";

export default function Routes() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact></Route>

        <Route path="/login"></Route>

        <Route path="/testing"></Route>

        <Route>404 Page not found</Route>
      </Switch>
    </div>
  );
}
