// @flow
import { ActionTypes } from '../actions/posts';

export default function pageSize (state=5, action) {
  if(action.type === ActionTypes.CHANGE_PAGE_SIZE) {
    return action.payload;
  }

  return state;
}
