import { OPEN_SIDE_NAV, CLOSE_SIDE_NAV } from "../../actions/modal_actions";


export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_SIDE_NAV:
      return action.sideNav
    case CLOSE_SIDE_NAV:
      return null;
    default:
      return state;
  }
}