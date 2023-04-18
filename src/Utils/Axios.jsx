import axios from "axios";

export const getAllRestaurants = () => {

    return axios.get("https://dineout-clone-server.onrender.com/restaurants");
}

export const addNewUser = ( payload ) => {
    return axios.post("https://dineout-clone-server.onrender.com/users", payload);
}

export const getAUser = ( id ) => {
    return axios.get(`https://dineout-clone-server.onrender.com/users/${id}`);
}

export const getARestaurant = ( id ) => {
    return axios.get(`https://dineout-clone-server.onrender.com/restaurants/${id}`);
}

export const getUserByMobile = (mobile) => {
    return axios.get(`https://dineout-clone-server.onrender.com/users/mobiles/${mobile}`);
}

export const updateUser = (id, payload) => {
    return axios.patch(`https://dineout-clone-server.onrender.com/users/${id}`, payload);
} 