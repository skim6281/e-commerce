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
                product={product} />
    });
  }

  render() {
    return(
      <div>
        {this.renderProducts()}
      </div>
    )
  }
}

export default Home;