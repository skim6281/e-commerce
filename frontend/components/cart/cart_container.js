import { connect } from 'react-redux'
import { fetchCartItems } from '../../actions/cart_item_actions';
import Cart from './cart';

const mapStateToProps = state => {
  return{
    currentUser: state.session.currentUser,
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCartItems: (cartId) => dispatch(fetchCartItems(cartId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
