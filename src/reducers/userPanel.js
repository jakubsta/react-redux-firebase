// @flow

import { ActionTypes } from '../actions/userPanel';

const userPanel = (state={ visible: false }, action) => {
  if(action.type === ActionTypes.SWITCH_USER_PANEL) {
    return { visible: action.payload };
  }

  return state;
};

export default userPanel; 
