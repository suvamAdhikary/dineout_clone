
import { Route, Switch } from 'react-router-dom';
import RestaurantPage from './Restaurant/RestaurantPage';
import { PetFriendly } from "./PetFriendly/PetFriendly";
import {Confirmation} from './ConfirmationPage/Confirmation'
import {MainHome} from './Home/MainHome'
import { ConfirmReservation } from '../Header/ConfirmReservation';
import Calender from './Restaurant/Components/Calender';


export default function Routes() {
  return (
    <div>
      <Switch>

        <Route path="/" exact>
          <MainHome/>
        </Route>

        <Route path="/petfriendly">
          <PetFriendly/>
        </Route>

        <Route path="/restaurant/:id" >
          <RestaurantPage />
        </Route>

        <Route path="/confirm">
          <Confirmation/>
        </Route>

        <Route path="/testing">
          <Calender />
        </Route>


        <Route>
          404 Page not found
        </Route>

      </Switch>
    </div>
  );
}
