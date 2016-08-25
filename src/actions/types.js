// @flow

const ActionTypes = [
  'CHANGE_PAGE_SIZE',
  'CHANGE_PAGE',
  'ADD_ITEM',
  'EDIT_ITEM', 
  'SET_ITEMS',
].reduce((acc, action) => {
  acc[action] = action; 
  return acc;
}, {});

export default ActionTypes;
