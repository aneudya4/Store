import { combineReducers } from "redux";
import CamerasReducer from "./CamerasReducer";
import CartReducer from "./CartReducer";

const rootReducer = combineReducers({
  phones: CamerasReducer,
  accesories: CartReducer
});

export default rootReducer;
