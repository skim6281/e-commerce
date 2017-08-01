import * as CartItemAPIUtil from '../util/cart_item_api_util';

export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';

export const receiveCartItem = cartItem => ({
  type: RECEIVE_CART_ITEM,
  cartItem
});

export const createCartItem = cartItem => dispatch => {
  return CartItemAPIUtil.createCartItem(cartItem).
    then(cartItem => dispatch(receiveCartItem(cartItem)));
};
