import {createStore ,applyMiddleware, compose} from "redux";
import postReducer, {initialState} from "./postReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {rootReducer} from "./appReducers";




 export const store  = createStore(rootReducer,  composeWithDevTools(
    applyMiddleware(thunk),
));

