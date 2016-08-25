// @flow

import { combineReducers } from 'redux';

import posts from './posts';
import user from './user';
import page from './page';
import userPanel from './userPanel';

const reducer = combineReducers({
  posts,
  user,
  page,
  userPanel,
});

export default reducer;
