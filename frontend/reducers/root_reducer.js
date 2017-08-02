import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ProductReducer from './product_reducer';
import CartReducer from './cart_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  products: ProductReducer,
  cart: CartReducer
});

export default RootReducer;
