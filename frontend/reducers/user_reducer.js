import { RECEIVE_USERS } from '../actions/user_actions';

const initialState = [];

const UserReducer = (state = initialState, action) => {
  Object.freeze(state)
  console.log(action);
  switch(action.type) {
    case RECEIVE_USERS:
      return action.users;
    default:
      return state;
  }
};

export default UserReducer;
