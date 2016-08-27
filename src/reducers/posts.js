// @flow

import { handleAction } from 'redux-actions';

import { setPosts } from '../actions/posts';

export default handleAction(
  setPosts,
  (state, { payload }) => payload,
  []
);
