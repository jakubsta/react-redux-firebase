// @flow

import { combineReducers } from 'redux';

import items from './items';
import user from './user';

const reducer = combineReducers({
  items,
  user,
});

export default reducer;
