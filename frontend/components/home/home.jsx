import React from 'react';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return(<div>Products</div>)
  }
}

export default Home;
