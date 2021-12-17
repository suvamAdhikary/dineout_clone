import axios from "axios";

export const getAllRestaurants = () => {

    return axios.get("https://dineout-clone.herokuapp.com/restaurants");
}