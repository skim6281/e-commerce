import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  REMOVE_ERRORS } from '../actions/session_actions';

const initialState = {
  currentUser: null,
  errors: []
}

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {currentUser: action.currentUser, errors: []});
    case RECEIVE_ERRORS:
      return Object.assign({}, state, { errors: action.errors});
    case REMOVE_ERRORS:
      return Object.assign({}, state, { errors: [] });
    default:
      return state;
  }
};

export default SessionReducer;
