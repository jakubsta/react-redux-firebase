// @flow

import React from 'react';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux'

import reducer from './src/reducers';
import middlewares from './src/middlewares';

import App from './src/components/App';

const store = createStore(reducer, middlewares);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
