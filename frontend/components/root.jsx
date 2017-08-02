import React from 'react';
import { Provider } from 'react-redux';
import { Switch } from 'react-router';
import { HashRouter, Route } from 'react-router-dom';
import HomeContainer from './home/home_container';
import UploadContainer from './upload_container';
import CartContainer from './cart/cart_container';
import ProductFormContainer from './product_form/product_form_container';
import Users from './users';
import App from './app';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <App>
          <Route exact path="/" component={ HomeContainer } />
          <Route exact path="/upload" component={ UploadContainer }/>
          <Route exact path="/cart" component={ CartContainer }/>
          <Route exact path="/product-form" component={ ProductFormContainer }/>
          <Route exact path="/users" component={ Users }/>
        </App>
      </HashRouter>
    </Provider>
  )
}

export default Root;
