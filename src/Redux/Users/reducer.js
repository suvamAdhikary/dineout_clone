import { ADD_USER_ERROR, ADD_USER_LOADING, ADD_USER_SUCCESS, GET_USER_ERROR, GET_USER_LOADING, GET_USER_SUCCESS } from "./actionTypes";

const initState = {
    user: {
        loading: false,
        data: {},
        error: false,
    }
};

export const userReducer = (state = initState, {type, payload}) => {

    switch(type) {
        case ADD_USER_LOADING:
            return {
                ...state,
                user: {
                    ...state.user,
                    loading: true,
                }
            };

        case ADD_USER_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    loading: false,
                    data: payload
                },
            };

        case ADD_USER_ERROR:
            return {
                ...state,
                user: {
                    ...state.user,
                    error: true,
                },
            };

        case GET_USER_LOADING:
            return {
                ...state,
                user: {
                    ...state.user,
                    loading: true,
                },
            };

        case GET_USER_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    loading: false,
                    data: payload,
                },
            };
        
        case GET_USER_ERROR:
            return {
                ...state,
                user: {
                    ...state.user,
                    error: true,
                },
            };


        default:
            return state;
    }
}