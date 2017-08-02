import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers/root_reducer';
import Root from './components/root';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
);

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={store}/>, root);
});
