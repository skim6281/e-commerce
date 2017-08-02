import React from 'react';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeCartItem = this.removeCartItem.bind(this);
  }

  removeCartItem() {
    this.props.deleteCartItem(this.props.cartItem)
  }

  render() {
    const { product, cartItem } = this.props;
    // console.log("cartitem: ");
    // console.log(cartItem);
    return (
      <div>
        <h3> {product.name} </h3>
        <p> {product.brand} </p>
        <p> {product.model} </p>
        <p> {product.sku} </p>
        <p> {product.price} </p>
        <button onClick={this.removeCartItem}>Remove</button>
      </div>
    )
  }
}

export default CartItem;
