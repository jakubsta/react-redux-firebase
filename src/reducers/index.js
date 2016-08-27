// @flow

import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import page from './page';

const reducer = combineReducers({
  posts,
  auth,
  page,
});

export default reducer;
