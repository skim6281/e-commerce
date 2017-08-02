import React from 'react';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        <h3> {product.name} </h3>
        <p> {product.brand} </p>
        <p> {product.model} </p>
        <p> {product.sku} </p>
        <p> {product.price} </p>
      </div>
    )
  }
}

export default CartItem;
