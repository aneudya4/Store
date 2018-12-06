import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import promise from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
const middleWare = [thunk, promise];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);
export default store;
