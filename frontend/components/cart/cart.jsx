import React from 'react';
import CartItem from './cart_item';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCartItems(this.props.currentUser.cart.id);
  }

  renderCartItems() {
    return this.props.cart.map(cartItem => {
      return <CartItem
                key={cartItem.id}
                product={cartItem.product} />
    });
  };

  render() {
    return(
      <div>
        Cart
        {this.renderCartItems()}
      </div>
    )
  }
}

export default Cart;
