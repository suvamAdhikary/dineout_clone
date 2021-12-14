
import { ConfirmationPage } from './Components/Header/ConfirmationPage';
import { Navbar } from './Components/Header/Navbar';
import { ScrollNavbar } from './Components/Header/ScrollNavbar';
import { Popup } from './Components/Pages/Home/Popup';
import { Signup } from './Components/Pages/Signup/Signup';
import { GlobalStyles } from './Components/Styles/Global';
import Dineout from './Dineout';

function App() {
  return (<>
    <GlobalStyles />
    <div className="App">
      {/* <Navbar/> */}
      <Signup/>
      {/* <ScrollNavbar/> */}
      {/* <ConfirmationPage/> */}
      {/* <Popup/> */}
      <Dineout />
    </div>
  </>);
}

export default App;
