// @flow

import ActionTypes from './types';

export function addItem (title) {
  return { type: ActionTypes.ADD_ITEM, payload: title };
}

export function editItem () { 
  return { type: ActionTypes.EDIT_ITEM };
};

export function setItems (items) {
  return { type: ActionTypes.SET_ITEMS, payload: items };
};

