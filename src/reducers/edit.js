// @flow

import { handleActions } from 'redux-actions';

import { editPost, saveEditedPost } from '../actions/edit';

export default handleActions({
  [editPost]: (state, { payload }) => ({ open: true, post: payload }),
  [saveEditedPost]: (state, action) => ({ open: false, post: null }),
}, { open: false, post: null });
