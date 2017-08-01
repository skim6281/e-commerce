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

  this.openModal() {
    this.setState({modalIsOpen: true});
  }

  this.closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const { product } = this.props;
    return(
      <div>
        <h3> {product.name} </h3>
        <span> {product.brand} </span>
        <span> {product.model} </span>
        <span> {product.sku} </span>
        <span> {product.price} </span>
      </div>
    )
  }
};
