// @flow

export const ActionTypes = [
  'CHANGE_PAGE_SIZE',
  'CHANGE_TO_NEXT_PAGE',
  'CHANGE_TO_FIRST_PAGE',
].reduce((acc, action) => {
  acc[action] = action; 
  return acc;
}, {});

export function changePageSize(pageSize) {
  return { type: ActionTypes.CHANGE_PAGE_SIZE, payload: pageSize };
}

export function changeToNextPage() {
  return { type: ActionTypes.CHANGE_TO_NEXT_PAGE };
}

export function changeToFirstPage() {
  return { type: ActionTypes.CHANGE_TO_FIRST_PAGE };
}
