// @flow

export const ActionTypes = [
  'CHANGE_PAGE_SIZE',
  'CHANGE_PAGE',
  'ADD_ITEM',
  'EDIT_ITEM', 
  'SET_ITEMS',
].reduce((acc, action) => {
  acc[action] = action; 
  return acc;
}, {});

export function addItem (title) {
  return { type: ActionTypes.ADD_ITEM, payload: title };
}

export function editItem () { 
  return { type: ActionTypes.EDIT_ITEM };
};

export function setItems (items) {
  return { type: ActionTypes.SET_ITEMS, payload: items };
};

