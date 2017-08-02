import * as ProductAPIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_PRODUCT_ERRORS = 'RECEIVE_PRODUCT_ERRORS';

export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
});

export const receiveProductErrors = errors => ({
  type: RECEIVE_PRODUCT_ERRORS,
  errors
})

export const createProducts = file => dispatch => {
  return ProductAPIUtil.createProducts(file);
};

export const createProduct = product => dispatch => {
  return ProductAPIUtil.createProduct(product)
    .then(product => dispatch(receiveProduct(product)),
    err => dispatch(receiveProductErrors(err.responseJSON)));
};

export const fetchProducts = () => dispatch => {
  return ProductAPIUtil.fetchProducts()
    .then(products => dispatch(receiveProducts(products)));
};
