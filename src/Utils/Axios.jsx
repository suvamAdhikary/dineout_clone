import axios from "axios";

export const getAllRestaurants = () => {

    return axios.get("https://dineout-clone.herokuapp.com/restaurants");
}

export const addNewUser = ( payload ) => {
    return axios.post("https://dineout-clone.herokuapp.com/users", payload);
}