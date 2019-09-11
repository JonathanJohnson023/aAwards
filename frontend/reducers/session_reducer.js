import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';
// import { RECEIVE_WEBSITE } from "../actions/website_actions";

const _nullSession = Object.freeze({
  id: null
});

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.user.id };
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    // case RECEIVE_WEBSITE:
    //   return {website: action.website.id}
    default:
      return state;
  }
};

export default sessionReducer;
