import axios from "axios";

export const getRestaurants = () => {

    return axios.get("http://localhost:3005/restaurants");
}