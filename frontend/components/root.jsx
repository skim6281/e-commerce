import React from 'react';
import { Provider } from 'react-redux';
import { Switch } from 'react-router';
import { HashRouter, Route } from 'react-router-dom';
import Products from './products';
import UploadContainer from './upload_container';
import App from './app';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <App>
          <Route exact path="/" component={ Products } />
          <Route exact path="/upload" component={ UploadContainer }/>
        </App>
      </HashRouter>
    </Provider>
  )
}

export default Root;
