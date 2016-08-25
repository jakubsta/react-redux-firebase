// @flow
//
import { ActionTypes } from '../actions/page';

export default function page (state={ size: 5 }, action) {
  if(action.type === ActionTypes.CHANGE_PAGE_SIZE) {
    return Object.assign({}, state, { size: action.payload });
  }

  return state;
}
