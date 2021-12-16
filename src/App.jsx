
import { FoodCard } from './Components/Pages/Home/FoodCard';
import { PetFriendly } from './Components/Pages/PetFriendly/PetFriendly';
import { GlobalStyles } from './Components/Styles/Global';
import {Signin} from './Components/Pages/signin/Signin'
import Dineout from './Dineout';
import { Explore } from './Components/Pages/Home/Explore';
function App() {
  return (<>
    <GlobalStyles />
    <div className="App">
      {/* <FoodCard/> */}
      {/* <PetFriendly/> */}
      {/* <Signin/> */}
      {/* <Explore/> */}
      <Dineout />
    </div>
  </>);
}

export default App;
