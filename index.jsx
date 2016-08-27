// @flow

import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import reducer from './src/reducers';
import middlewares from './src/middlewares';

import App from './src/components/App';

injectTapEventPlugin();

const store = createStore(reducer, middlewares);

ReactDom.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
