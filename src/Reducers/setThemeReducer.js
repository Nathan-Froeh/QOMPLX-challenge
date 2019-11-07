export const setThemeReducer = (state = '', {type, payload}) => {
  switch(type) {
    case 'SET_THEME':
      return payload;
    default:
      return state

  }
}