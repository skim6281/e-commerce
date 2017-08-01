import * as ProductAPIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const createProducts = file => dispatch => {
  return ProductAPIUtil.createProducts(file);
}
