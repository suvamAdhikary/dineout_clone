import React from "react";
import Footer from "../Footer/Footer";
import Passport from "./Home-component/Passport";
import OfferCards from "./Home-component/OfferCards";
import MobileApp from "./Home-component/MobileApp";
import Buttons from "./Home-component/Buttons";

export default function HomePage() {
  return (
    <>
  
      
      <OfferCards/>
        {/* <Buttons/> */}
        <Passport/>
        <MobileApp/>
        <Footer/>
    

      
    </>
  );
}
