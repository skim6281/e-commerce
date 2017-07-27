import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
);
