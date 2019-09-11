import { RECEIVE_TOP_WEBSITE } from "../actions/website_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TOP_WEBSITE:
        return Object.assign({}, state, {topWebsite: action.topWebsite})
    default: 
      return state
  }
}