
import { FoodCard } from './Components/Pages/Home/FoodCard';
import { PetFriendly } from './Components/Pages/PetFriendly/PetFriendly';
import { GlobalStyles } from './Components/Styles/Global';
import Dineout from './Dineout';
function App() {
  return (<>
    <GlobalStyles />
    <div className="App">
      {/* <FoodCard/> */}
      <PetFriendly/>
      <Dineout />
    </div>
  </>);
}

export default App;
