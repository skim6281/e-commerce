export const createProducts = products => {
  return $.ajax({
    method: 'POST',
    url: 'api/products',
    contentType: false,
    processData: false,
    data: products
  });
};

export const fetchProducts = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/prodcuts'
  });
};
