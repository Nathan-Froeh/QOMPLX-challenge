import {combineReducers} from 'redux';

export const testReducer = (state = 'emtpy test', {type, payload}) => {
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

export default allReducers;