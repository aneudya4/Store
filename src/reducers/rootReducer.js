import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import CartReducer from "./CartReducer";

const rootReducer = combineReducers({
  phones: itemsReducer,
  phonesAccesories: itemsReducer,
  cart: CartReducer
});

export default rootReducer;
