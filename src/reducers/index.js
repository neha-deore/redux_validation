import { updateState, updateCounter } from "./reducers";
// import clrCart from "./clrCart";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ updateState: updateState, updateCounter: updateCounter });

export default rootReducer;