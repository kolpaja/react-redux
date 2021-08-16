//importing the pckages redux and thunk middleware
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer"
// creating the store with the middleware

const initialState = {}; //if we want an initial state 
const middleware = [thunk]

//create the store using the enhanciers, reducers, initial state and middlewares
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))

export default store;