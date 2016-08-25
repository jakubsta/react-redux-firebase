// @flow

import { combineReducers } from 'redux';

import posts from './posts';
import user from './user';
import pageSize from './pageSize';

const reducer = combineReducers({
  posts,
  user,
  pageSize,
});

export default reducer;
