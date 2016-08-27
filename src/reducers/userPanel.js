// @flow

import { handleAction } from 'redux-actions';

import { switchUserPanel } from '../actions/userPanel';

export default handleAction(
  switchUserPanel,
  (state, { payload }) => ({ visible: payload }),
  { visible: false }
);
