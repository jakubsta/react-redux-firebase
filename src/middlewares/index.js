// @flow

import { applyMiddleware, compose } from 'redux';

import Firebase from './firebase';

const firebase = new Firebase();

const middlewares = compose(
  applyMiddleware(
    firebase.toMiddleware()
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default middlewares;
