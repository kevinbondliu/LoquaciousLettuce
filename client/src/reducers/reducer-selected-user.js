export default (state = null, action) => {
  switch (action.type) {
    case 'USER_SELECTED' : {
      state = action.payload;
      break;
    }
  }
  return state;
};