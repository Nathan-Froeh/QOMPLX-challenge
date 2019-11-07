import {combineReducers} from 'redux';

export const testReducer = (state = '', {type, payload}) => {
  switch(type) {
    case 'TEST_ACTION':
      return payload;
    default:
      return state

  }
}

export const allReducers = combineReducers({
  reduxTest: testReducer
})