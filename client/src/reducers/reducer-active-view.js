export default function (state=null, action) {
  if (action.type === 'MODE_SELECTED') {
    return action.payload;
  }
  return state;
}