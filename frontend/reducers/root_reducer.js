import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from "./session_errors_reducer"

const rootReducer = combineReducers({
  session,
  errors
});

export default rootReducer;
