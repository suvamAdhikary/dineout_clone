import { getAllRestaurants } from "../../Utils/Axios";
import { GET_RESTAURANT_ERROR, GET_RESTAURANT_LOADING, GET_RESTAURANT_SUCCESS } from "./actionTypes";


export const getRestaurantsLoading = () => ({ type: GET_RESTAURANT_LOADING });
export const getRestaurantsSuccess = (payload) => ({ type: GET_RESTAURANT_SUCCESS, payload });
export const getRestaurantError = (payload) => ({ type: GET_RESTAURANT_ERROR, payload });

export const getRestaurants = () => async (dispatch) => {

    dispatch(getRestaurantsLoading());

    try {

        const { data } = await getAllRestaurants();

        if(!data.length) return;

        dispatch(getRestaurantsSuccess(data));

    } catch(error) {

        dispatch(getRestaurantError(error));

    }
}