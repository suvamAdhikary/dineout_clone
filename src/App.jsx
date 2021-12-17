
import { FoodCard } from './Components/Pages/Home/FoodCard';
import { PetFriendly } from './Components/Pages/PetFriendly/PetFriendly';
import { GlobalStyles } from './Components/Styles/Global';
import {Signin} from './Components/Pages/signin/Signin'
import Dineout from './Dineout';
import { Explore } from './Components/Pages/Home/Explore';
import { SearchBox } from './Components/Pages/Home/SearchBox';
import { MainHome } from './Components/Pages/Home/MainHome';
function App() {
  return (<>
    <GlobalStyles />
    <div className="App">
      {/* <FoodCard/> */}
      {/* <PetFriendly/> */}
      {/* <Signin/> */}
      {/* <Explore/> */}
      {/* <SearchBox/> */}
      {/* <Dineout /> */}
      <MainHome/>
    </div>
  </>);
}

export default App;
