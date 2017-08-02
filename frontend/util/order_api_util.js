export const createOrder = userId => {
  return $.ajax({
    method: 'POST',
    url: 'api/orders',
    data: {user_id: userId}
  })
}
