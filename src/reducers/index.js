// @flow

import { combineReducers } from 'redux';

import posts from './posts';
import user from './user';
import page from './page';

const reducer = combineReducers({
  posts,
  user,
  page,
});

export default reducer;
