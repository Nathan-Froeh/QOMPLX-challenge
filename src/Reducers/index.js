import {combineReducers} from 'redux';
import {setTipReducer} from './setTipReducer';
import {setTotalReducer} from './setTotalReducer';

export const testReducer = (state = 'emtpy test', {type, payload}) => {
  switch(type) {
    case 'TEST_ACTION':
      return payload;
    default:
      return state

  }
}

export const allReducers = combineReducers({
  reduxTest: testReducer,
  tip: setTipReducer,
  total: setTotalReducer
})

export default allReducers;