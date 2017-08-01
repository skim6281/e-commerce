import { connect } from 'react-redux';
import { createProducts } from '../actions/product_actions';
import Upload from './upload';

const mapDispatchToProps = dispatch => {
  return {
    createProducts: products => dispatch(createProducts(products))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Upload);
