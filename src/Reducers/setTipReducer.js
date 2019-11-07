export const setTipReducer = (state = '', {type, payload}) => {
  switch(type) {
    case 'SET_TIP':
      return payload;
    default:
      return state

  }
}