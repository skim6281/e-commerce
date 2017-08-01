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
  };

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const { product } = this.props;
    return(
      <div>
        <h3> {product.name} </h3>
        <p> {product.brand} </p>
        <p> {product.model} </p>
        <p> {product.sku} </p>
        <p> {product.price} </p>
      </div>
    )
  }
};

export default Product;
