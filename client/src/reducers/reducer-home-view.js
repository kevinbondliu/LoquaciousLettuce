export default (state = 'preSignUp' , action) => {
  switch (action.type) {
    case 'CHANGE_HOME_VIEW' : {
      state = action.payload;
      break;
    }
  }
  return state;
};