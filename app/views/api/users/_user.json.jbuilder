json.id user.id
json.username user.username
json.admin user.admin
json.cart json.partial! "api/users/cart", cart: user.cart
