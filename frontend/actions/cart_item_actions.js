import * as CartItemAPIUtil from '../util/cart_item_api_util';

export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

export const receiveCartItem = cartItem => ({
  type: RECEIVE_CART_ITEM,
  cartItem
});

export const receiveCartItems = cartItems => ({
  type: RECEIVE_CART_ITEMS,
  cartItems
});

export const removeCartItem = cartItem => ({
  type: REMOVE_CART_ITEM,
  cartItem
});

export const createCartItem = cartItem => dispatch => {
  return CartItemAPIUtil.createCartItem(cartItem)
    .then(cartItem => dispatch(receiveCartItem(cartItem)));
};

export const fetchCartItems = cartId => dispatch => {
  return CartItemAPIUtil.fetchCartItems(cartId)
    .then(cartItems => dispatch(receiveCartItems(cartItems)));
};

export const deleteCartItem = cartItem => dispatch => {
  return CartItemAPIUtil.deleteCartItem(cartItem)
    .then(cartItem => dispatch(removeCartItem(cartItem)));
};
