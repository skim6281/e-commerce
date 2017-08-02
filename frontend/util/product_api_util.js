export const createProducts = products => {
  return $.ajax({
    method: 'POST',
    url: 'api/products',
    contentType: false,
    processData: false,
    data: products
  });
};

export const createProduct = product => {
  return $.ajax({
    method: 'POST',
    url: 'api/products',
    data: { product }
  });
};

export const fetchProducts = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/products'
  });
};
