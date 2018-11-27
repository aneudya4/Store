import { combineReducers } from "redux";
import PhonesReducer from "./PhonesReducer";
import CartReducer from "./CartReducer";

const rootReducer = combineReducers({
  phones: PhonesReducer,
  phonesAccesories: PhonesReducer,
  cart: CartReducer
});

export default rootReducer;
