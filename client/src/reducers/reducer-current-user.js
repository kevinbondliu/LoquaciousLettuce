export default (state = 'null' , action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER' : {
      state = action.payload;
      break;
    }
  }
  return state;
};