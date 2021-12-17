import { Navbar } from "../../Header/Navbar";
import { ScrollNavbar } from "../../Header/ScrollNavbar";

import { Buttons } from "./Buttons";
import MobileApp from "./MobileApp";
import Passport from "./Passport";
import OfferCards from "./OfferCards";
import { SearchBox } from "./SearchBox";
import Footer from "../../Footer/Footer";
import { useState } from "react";
import {RestrauntsNear} from './RestrauntsNear'
import { FeaturedRestraunts } from "./FeaturedRestraunts";
export const MainHome = () => {
  const [nav, setNav] = useState(false);
  const handleChange = () => {
    if (window.scrollY >= 100) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", handleChange);
  return (
    <>
      {/* {!nav ? <Navbar /> : <ScrollNavbar />} */}
      <Navbar/>
      <SearchBox />
      <OfferCards />
      <RestrauntsNear />
      <FeaturedRestraunts />
      <Buttons />
      <Passport />
      <MobileApp />
      <Footer />
    </>
  );
};
