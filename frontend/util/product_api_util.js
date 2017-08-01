export const createProducts = products => {
  return $.ajax({
    method: 'POST',
    url: 'api/products',
    contentType: false,
    processData: false,
    data: products
  });
};
