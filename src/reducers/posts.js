// @flow

import { ActionTypes } from '../actions/posts';

const posts = (state=[], action) => {
  switch(action.type) {
    case ActionTypes.SET_POSTS:
      return action.payload;

    default:
      return state;
  }

};

export default posts;
