import { combineReducers } from 'redux';
import picsReducer from './pics/reducers'


const rootReducer = combineReducers({
  picsReducer,
});

export default rootReducer;