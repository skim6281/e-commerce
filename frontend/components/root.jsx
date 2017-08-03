import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Redirect } from 'react-router';
import { HashRouter, Route } from 'react-router-dom';
import HomeContainer from './home/home_container';
import UploadContainer from './upload/upload_container';
import CartContainer from './cart/cart_container';
import ProductFormContainer from './product_form/product_form_container';
import Users from './users';
import App from './app';


const Root = ({ store }) => {
  //check to see if user is admin
  const isAdmin = () => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser && currentUser.admin) return true
    return false
  }
  //only allow admins to access some pages
  return (
    <Provider store={store}>
      <HashRouter>
        <App>
          <Route exact path="/" component={ HomeContainer } />
          <Route exact path="/cart" component={ CartContainer } />
          <Route exact path="/upload" render={() => (
              isAdmin() ? (<UploadContainer/>):(<Redirect to="/"/>)
            )}/>
          <Route exact path="/product-form" render={() => (
              isAdmin() ? (<ProductFormContainer/>):(<Redirect to="/"/>)
            )}/>
          <Route exact path="/users" render={() => (
              isAdmin() ? (<Users/>):(<Redirect to="/"/>)
            )}/>
        </App>
      </HashRouter>
    </Provider>
  )
}

export default Root;
