// @flow

import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import page from './page';
import edit from './edit';

const reducer = combineReducers({
  posts,
  auth,
  page,
  edit,
});

export default reducer;
