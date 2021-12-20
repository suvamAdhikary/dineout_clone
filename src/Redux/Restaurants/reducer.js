import { GET_RESTAURANT_ERROR, GET_RESTAURANT_LOADING, GET_RESTAURANT_SUCCESS } from "./actionTypes";

const initState = {
    restaurants: {
        loading: false,
        data: [],
        error: false
    }
};


export const restaurantReducer = (state = initState, {type, payload}) => {

    switch(type) {
        case GET_RESTAURANT_LOADING:
            return {
                ...state,
                restaurants: {
                    ...state.restaurants,
                    loading: !state.restaurants.loading,
                },
            };
        
        case GET_RESTAURANT_SUCCESS:
            return {
                ...state,
                restaurants: {
                    ...state.restaurants,
                    loading: false,
                    data: payload
                },
            };

        case GET_RESTAURANT_ERROR:
            return {
                ...state,
                restaurants: {
                    ...state.restaurants,
                    error: true,
                },
            };


        default:
            return state;
    };
}