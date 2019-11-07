export const setTipAmountReducer = (state = '', {type, payload}) => {
  switch(type) {
    case 'SET_TIP_AMOUNT':
      return payload;
    default:
      return state

  }
}