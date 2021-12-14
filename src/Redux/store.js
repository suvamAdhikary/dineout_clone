import { applyMiddleware, combineReducers, compose, createStore } from "redux";




const rootReducer = combineReducers({
    // restaurants: restaurantsReducer
})




export const store = createStore(

    rootReducer,


    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);