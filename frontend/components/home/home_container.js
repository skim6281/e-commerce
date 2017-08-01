import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import Home from './home';

const mapStateToProps = state => {
  return({
    products: state.products
  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
