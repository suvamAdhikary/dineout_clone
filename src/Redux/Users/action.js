import { addNewUser, getAUser } from "../../Utils/Axios";
import { ADD_USER_ERROR, ADD_USER_LOADING, ADD_USER_SUCCESS, GET_USER_ERROR, GET_USER_LOADING, GET_USER_SUCCESS } from "./actionTypes";


export const addUserLoading = () => ({ type: ADD_USER_LOADING });
export const addUserSuccess = (payload) => ({ type: ADD_USER_SUCCESS, payload });
export const addUserError = (payload) => ({ type: ADD_USER_ERROR, payload });

export const getUserLoading = () => ({ type: GET_USER_LOADING });
export const getUserSuccess = (payload) => ({ type: GET_USER_SUCCESS, payload });
export const getUserError = (payload) => ({ type: GET_USER_ERROR, payload });


export const addUser = (payload) => async (dispatch) => {

    dispatch(addUserLoading());

    try{

        const { data } = await addNewUser(payload);

        dispatch(addUserSuccess(data));

    } catch (err) {

        dispatch(addUserError(err));
    }
}

export const getUser = (payload) => async (dispatch) => {

    dispatch(getUserLoading());
    
    try {

        const { data: {item} } = await getAUser(payload);

        // dispatch(getUserLoading());
        
        if(!item) return;

        dispatch(getUserSuccess(item));


    } catch(error) {

        dispatch(getUserError(error));

    }
}