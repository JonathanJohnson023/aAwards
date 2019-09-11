import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_ERRORS,
} from '../actions/session_actions';
import {  RECEIVE_WEBSITE_ERRORS} from "../actions/website_actions"

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_WEBSITE_ERRORS:
      return Object.assign({}, action.errors.responseJSON)
    case RECEIVE_CURRENT_USER:
      return [];
    case CLEAR_ERRORS:
      return []
    default:
      return state;
  }
};
