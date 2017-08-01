import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import { createCartItem } from '../../actions/cart_item_actions';
import Home from './home';

const mapStateToProps = state => {
  return({
    products: state.products,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    createCartItem: (cartItem) => dispatch(createCartItem(cartItem))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
