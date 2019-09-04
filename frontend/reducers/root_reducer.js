import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from "./session_errors_reducer"
import entities from './entities_reducer'

const rootReducer = combineReducers({
  entities,
  errors,
  session
});

export default rootReducer;
