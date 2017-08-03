import {
  RECEIVE_CART_ITEMS,
  RECEIVE_CART_ITEM,
  REMOVE_CART_ITEM,
  REMOVE_CART_ITEMS } from '../actions/cart_item_actions';

const initialState = []

const CartReducer = (state = initialState, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CART_ITEMS:
      return action.cartItems
    case RECEIVE_CART_ITEM:
      return [...state, action.cartItem]
    case REMOVE_CART_ITEM:
      const newCartItems = state.slice();
      let index;
      //look for the index of cart item
      for(let i = 0; i < newCartItems.length; i++) {
        let item = newCartItems[i];
        if(action.cartItem.id === item.id) {
          index = i;
        }
      }
      if(index > -1) {
        newCartItems.splice(index, 1);
      }
      return newCartItems;
    case REMOVE_CART_ITEMS:
      return [];
    default:
      return state;
  }
};

export default CartReducer;
