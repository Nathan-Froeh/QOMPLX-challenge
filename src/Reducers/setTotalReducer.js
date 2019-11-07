export const setTotalReducer = (state = '', {type, payload}) => {
  switch(type) {
    case 'SET_TOTAL':
      return payload;
    default:
      return state

  }
}