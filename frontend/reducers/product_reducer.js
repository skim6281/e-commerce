import {
  RECEIVE_PRODUCTS,
  RECEIVE_PRODUCT } from '../actions/product_actions';

const initialState = []

const ProductReducer = (state = initialState, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_PRODUCTS:
      return action.products;
    case RECEIVE_PRODUCT:
      return [action.product, ...state];
    default:
      return state;
  }
};

export default ProductReducer;
