import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { restaurantReducer } from "./Restaurants/reducer";




const rootReducer = combineReducers({
    restaurants: restaurantReducer
})




export const store = createStore(

    rootReducer,


    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);