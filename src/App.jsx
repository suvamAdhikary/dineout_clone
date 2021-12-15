
import { FoodCard } from './Components/Pages/Home/FoodCard';
import { GlobalStyles } from './Components/Styles/Global';
import Dineout from './Dineout';
function App() {
  return (<>
    <GlobalStyles />
    <div className="App">
      <FoodCard/>
      <Dineout />
    </div>
  </>);
}

export default App;
