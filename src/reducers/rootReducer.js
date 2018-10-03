import { combineReducers } from "redux";
import CamerasReducer from "./CamerasReducer";
import CartReducer from "./CartReducer";

const rootReducer = combineReducers({
  cameras: CamerasReducer,
  cart: CartReducer
});

export default rootReducer;
