import Routes from "./Components/Pages/Routes"
import Footer from "./Components/Footer/Footer"
import Passport from "./Components/Cards/Passport"
import Card from "./Components/Cards/Card"
import OfferCards from "./Components/Cards/OfferCards"
import MobileApp from "./Components/Cards/MobileApp"
import HomePage from "./Components/Home/HomePage"

export default function Dineout() {

    return (<>
        <Routes />
        <HomePage/>
        <OfferCards/>
        <Passport/>
        <Card/>
        <MobileApp/>
        <Footer/>
    </>)
}