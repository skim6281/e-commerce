import * as OrderAPIUtil from '../util/order_api_util';
import { removeCartItems } from './cart_item_actions';

export const createOrder = userId => dispatch => {
  return OrderAPIUtil.createOrder(userId)
    .then(() => dispatch(removeCartItems()));
};
