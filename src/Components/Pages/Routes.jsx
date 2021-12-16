import { Route, Switch } from 'react-router-dom';
import RestaurantPage from './Restaurant/RestaurantPage';


export default function Routes() {
  return (
    <div className="App">

      <Switch>
        <Route path="/" exact>

        </Route>

        <Route path="/login">

        </Route>

        <Route path="/testing">
          <RestaurantPage />
        </Route>


        <Route>
          404 Page not found
        </Route>
      </Switch>
    </div>
  );
}