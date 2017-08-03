import { connect } from 'react-redux';
import { createProducts } from '../actions/product_actions';
import Upload from './upload';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProducts: products => dispatch(createProducts(products))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload);
