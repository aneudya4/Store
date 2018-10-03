import axios from "axios";
export const FETCH_ITEMS = "FETCH_ITEMS";
export const ADD_TO_CART = "ADD_TO_CART";

export const fetchItems = () => async dispatch => {
  const url =
    "https://api.bestbuy.com/beta/products/trendingViewed(categoryId=abcat0400000)?apiKey=zOyps5iN0ySoVtDgXtubx35V";
  const res = await axios.get(url);
  dispatch({
    type: FETCH_ITEMS,
    payload: res.data.results
  });
};

export const addToCart = product => async dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: product
  });
};

// subwooofer
//https://api.bestbuy.com/beta/products/openBox(categoryId=abcat0200000)?apiKey=zOyps5iN0ySoVtDgXtubx35V

// most viewed "https://api.bestbuy.com/beta/products/mostViewed(categoryId=abcat0107000)?apiKey=zOyps5iN0ySoVtDgXtubx35V"
// laptops https://api.bestbuy.com/beta/products/openBox(categoryId=abcat0502000)?apiKey=zOyps5iN0ySoVtDgXtubx35V
