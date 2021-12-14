
import { Navbar } from './Components/Header/Navbar';
import { ScrollNavbar } from './Components/Header/ScrollNavbar';
import { GlobalStyles } from './Components/Styles/Global';
import Dineout from './Dineout';

function App() {
  return (<>
    <GlobalStyles />
    <div className="App">
      <Navbar/>
      {/* <ScrollNavbar/> */}
      <Dineout />
    </div>
  </>);
}

export default App;
