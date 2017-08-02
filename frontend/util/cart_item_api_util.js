export const createCartItem = cartItem => {
  const { cart_id } = cartItem;
  return $.ajax({
      method: 'POST',
      url: `api/carts/${cart_id}/cart_items`,
      data: {cart_item: cartItem }
  });
};

export const fetchCartItems = cartId => {
  return $.ajax({
    method: 'GET',
    url: `api/carts/${cartId}/cart_items`
  })
}
