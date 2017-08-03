import React from 'react';
import CartItem from './cart_item';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.makeOrder = this.makeOrder.bind(this);
  }

  componentDidMount() {
    this.props.fetchCartItems(this.props.currentUser.cart.id);
  }

  makeOrder() {
    this.props.createOrder(this.props.currentUser.id);
  }

  renderCartItems() {
    console.log(this.props.cart);
    return this.props.cart.map(cartItem => {
      return (
          <CartItem
                    key={cartItem.id}
                    cartItem={cartItem}
                    product={cartItem.product}
                    deleteCartItem={this.props.deleteCartItem}/>
      )
    });
  };

  renderBuyButton() {
    if(this.props.cart.length > 0) {
      return (<button className="buy" onClick={this.makeOrder}>Buy</button>)
    } else {
      return(<div>Empty</div>)
    }
  }

  render() {
    return(
      <div className="below-nav">
        {this.renderCartItems()}
        {this.renderBuyButton()}
      </div>
    )
  }
}

export default Cart;
