// @flow

export const ActionTypes = [
  'ADD_POST',
  'EDIT_POST', 
  'SET_POSTS',
].reduce((acc, action) => {
  acc[action] = action; 
  return acc;
}, {});

export function addPost (title) {
  return { type: ActionTypes.ADD_POST, payload: title };
}

export function editPost () { 
  return { type: ActionTypes.EDIT_POST };
}

export function setPosts (items) {
  return { type: ActionTypes.SET_POSTS, payload: items };
}
