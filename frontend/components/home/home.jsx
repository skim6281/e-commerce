import React from 'react';
import Product from './product';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProducts() {
    return this.props.products.map(product => {
      return <Product
                key={product.id}
                createCartItem={this.props.createCartItem}
                currentUser={this.props.currentUser}
                product={product} />
    });
  }

  render() {
    const { products } = this.props;
    if(products.length === 0) {
      return(<div className="below-nav">Nothing in stock</div>)
    } else {
      return(
        <div className="below-nav product-feed">
          {this.renderProducts()}
        </div>
      )
    }
  }
}

export default Home;
