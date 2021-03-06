import { ADD_TO_CART, REMOVE_FROM_CART } from "./../actions/index";
const initialState = [];

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      const newState = state.filter(p => p.sku !== action.payload.sku);
      return newState;
    default:
      return state;
  }
};

export default CartReducer;
