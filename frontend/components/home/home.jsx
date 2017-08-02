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
    return(
      <div className="below-nav">
        {this.renderProducts()}
      </div>
    )
  }
}

export default Home;
