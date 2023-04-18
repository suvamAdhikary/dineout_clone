import { Navbar } from "../../Header/Navbar";
import { Buttons } from "./Buttons";
import {Popup} from "./Popup"
import MobileApp from "./MobileApp";
import Passport from "./Passport";
import OfferCards from "./OfferCards";
import { SearchBox } from "./SearchBox";
import Footer from "../../Footer/Footer";
import { useEffect } from "react";
import axios from "axios";
import { RestrauntsNear } from "./RestrauntsNear";
import { FeaturedRestraunts } from "./FeaturedRestraunts";
import {
  getRestaurantError,
  getRestaurantsLoading,
  getRestaurantsSuccess,
} from "../../../Redux/Restaurants/action";
import { useDispatch } from "react-redux";
export const MainHome = () => {
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(getRestaurantsLoading());
    try {
      const { data } = await axios.get(
        "https://dineout-clone-server.onrender.com/restaurants"
      );
      dispatch(getRestaurantsSuccess(data.items));
    } catch (err) {
      dispatch(getRestaurantError(err));
    }
  }, []);
  return (
    <>
     <Navbar />
     <Popup/>
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
