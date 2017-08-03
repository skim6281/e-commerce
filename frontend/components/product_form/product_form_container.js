import { connect } from 'react-redux';
import { createProduct, removeProductErrors } from '../../actions/product_actions';
import ProductForm from './product_form';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    products: state.products.products,
    errors: state.products.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProduct: (product) => dispatch(createProduct(product)),
    removeErrors: () => dispatch(removeProductErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductForm);
