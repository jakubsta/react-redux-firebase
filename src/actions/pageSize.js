// @flow

import { ActionTypes } from './posts';

export function changePageSize(pageSize) {
  return { type: ActionTypes.CHANGE_PAGE_SIZE, payload: pageSize };
}
