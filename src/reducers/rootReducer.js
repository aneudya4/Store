import { combineReducers } from "redux";
import CamerasReducer from "./CamerasReducer";

const rootReducer = combineReducers({
  cameras: CamerasReducer
});

export default rootReducer;
