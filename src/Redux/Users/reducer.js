import { getAUser } from "../../Utils/Axios";
import { ADD_USER_ERROR, ADD_USER_LOADING, ADD_USER_SUCCESS, GET_USER_ERROR, GET_USER_LOADING, GET_USER_SUCCESS } from "./actionTypes";

const userId = JSON.parse(localStorage.getItem('dineout-userId'))


var userData;

const loaddata = async (userId) => {

    const { data } = await getAUser(userId);

    userData = data.item;
    // console.log(data.item);
}
 
loaddata(userId)
// console.log(data, "frm rdcr");
const initState = {
    user: {
        loading: false,
        data: userData || {},
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