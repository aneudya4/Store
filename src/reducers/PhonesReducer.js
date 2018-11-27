import { FETCH_ITEMS } from "../actions";
const initialState = [];

const PhonesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return action.payload;
    default:
      return state;
  }
};

export default PhonesReducer;
