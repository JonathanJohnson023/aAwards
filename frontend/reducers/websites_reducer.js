import { RECEIVE_WEBSITES, RECEIVE_WEBSITE, RECEIVE_VOTE, RECEIVE_TOP_WEBSITE } from "../actions/website_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WEBSITES:
      // const websites = {};
      // action.websites.map(website => {
      //   websites[website.id] = website;
      // });
      return action.websites;
    case RECEIVE_WEBSITE:
      return Object.assign({}, state, { [action.website.id]: action.website });
    case RECEIVE_TOP_WEBSITE:
      return Object.assign({}, state, {topWebsite: action.topWebsite})
    default:
      return state;
  }
}
