import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ProductReducer from './product_reducer';
import CartReducer from './cart_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  products: ProductReducer,
  cart: CartReducer,
  users: UserReducer
});

export default RootReducer;
