import { Navbar } from "../../Header/Navbar";
import { Buttons } from "./Buttons";
import MobileApp from "./MobileApp";
import Passport from './Passport'
import OfferCards from "./OfferCards";
import { SearchBox } from "./SearchBox";
import Footer from '../../Footer/Footer'
import { FeaturedRestraunts } from "./FeaturedRestraunts";
export const MainHome = () => {
  return (
    <>
      <Navbar />
      <SearchBox />
      <OfferCards />
      <FeaturedRestraunts/>
      <Buttons />
      <Passport />
      <MobileApp />
      <Footer/>
    </>
  );
};
