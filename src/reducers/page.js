// @flow

import { handleAction } from 'redux-actions';

import { changePageSize } from '../actions/page';

export default handleAction(
  changePageSize,
  (state, { payload }) => ({ ...state, size: payload }),
  { size: 5 }
);
