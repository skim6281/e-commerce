import { connect } from 'react-redux';
import { createProduct } from '../../actions/product_actions';
import ProductForm from './product_form';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProduct: (product) => dispatch(createProduct(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductForm);
