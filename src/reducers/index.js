import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import GuitarsReducer from "./GuitarsReducer";

 export default combineReducers({
  cart: CartReducer,
  guitars: GuitarsReducer
});


