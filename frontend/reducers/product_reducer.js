import {
  RECEIVE_PRODUCTS,
  RECEIVE_PRODUCT,
  RECEIVE_PRODUCT_ERRORS,
  REMOVE_PRODUCT_ERRORS } from '../actions/product_actions';

const initialState = {
  products: [],
  errors: []
};

const ProductReducer = (state = initialState, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, {products: action.products, errors: []});
    case RECEIVE_PRODUCT:
      const newProducts = [action.product, ...state.products];
      return Object.assign({}, state, {products: newProducts, errors: []});
    case RECEIVE_PRODUCT_ERRORS:
      return Object.assign({}, state, { errors: action.errors});
    case REMOVE_PRODUCT_ERRORS:
      return Object.assign({}, state, { errors: [] });
    default:
      return state;
  }
};

export default ProductReducer;
