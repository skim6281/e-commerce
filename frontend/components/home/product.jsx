import React from 'react';
import Modal from 'react-modal';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addToCart = this.addToCart.bind(this);
  };

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  addToCart() {
    const { product, currentUser } = this.props;
    this.props.createCartItem({product_id: product.id, cart_id: currentUser.cart.id})
  }

  renderAddToCartButton() {
    if(this.props.currentUser) {
      return (
        <button onClick={this.addToCart}>Add to Cart</button>
      )
    }
  }

  render() {
    const { product } = this.props;
    return(
      <div className="product">
        <h3> {product.name} </h3>
        <p> <b>Brand:</b> {product.brand} </p>
        <p> <b>Model:</b> {product.model} </p>
        <p> {product.sku} </p>
        <p> ${product.price} </p>
        {this.renderAddToCartButton()}
      </div>
    )
  }
};

export default Product;
