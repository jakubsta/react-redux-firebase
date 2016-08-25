// @flow
//
export const ActionTypes = [
  'SWITCH_USER_PANEL',
].reduce((acc, action) => {
  acc[action] = action; 
  return acc;
}, {});


export function switchUserPanel (state) {
 return { type: ActionTypes.SWITCH_USER_PANEL, payload: state }; 
}
