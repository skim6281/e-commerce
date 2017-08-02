import { connect } from 'react-redux'
import { fetchCartItems, deleteCartItem } from '../../actions/cart_item_actions';
import Cart from './cart';
import { createOrder } from '../../actions/order_actions';


const mapStateToProps = state => {
  return{
    currentUser: state.session.currentUser,
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCartItems: (cartId) => dispatch(fetchCartItems(cartId)),
    deleteCartItem: (cartItem) => dispatch(deleteCartItem(cartItem)),
    createOrder: (userId) => dispatch(createOrder(userId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
