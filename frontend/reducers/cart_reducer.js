import { RECEIVE_CART_ITEMS, RECEIVE_CART_ITEM } from '../actions/cart_item_actions';

const initialState = []

const CartReducer = (state = initialState, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CART_ITEMS:
      return action.cartItems
    case RECEIVE_CART_ITEM:
      return [...state, action.cartItem]
    default:
      return state;
  }
};

export default CartReducer;
