import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { restaurantReducer } from "./Restaurants/reducer";

import { userReducer } from "./Users/reducer";




const rootReducer = combineReducers({
    restaurants: restaurantReducer,
    user: userReducer
})


const composeEnhancers = (

    typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__

) || compose;

const enhancer = composeEnhancers(applyMiddleware(

    thunk
));




export const store = createStore(

    rootReducer,

    enhancer,

    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

