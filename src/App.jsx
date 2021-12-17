
import HomePage from './Components/Home/HomePage';
import { GlobalStyles } from './Components/Styles/Global';
import Dineout from './Dineout';

function App() {
  return (<>
    <GlobalStyles />
    <div className="App">
      <HomePage/>
      {/* <Dineout /> */}
    </div>
  </>);
}

export default App;
