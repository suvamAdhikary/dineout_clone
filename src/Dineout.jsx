import Routes from "./Components/Pages/Routes"
import Footer from "./Components/Footer/Footer"
import Passport from "./Components/Cards/Passport"
import Card from "./Components/Cards/Card"
import OfferCards from "./Components/Cards/OfferCards"

export default function Dineout() {

    return (<>
        <Routes />
        <OfferCards/>
        <Passport/>
        <Card/>
        <Footer/>
    </>)
}