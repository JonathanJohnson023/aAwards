import { combineReducers } from 'redux';
import modal from './ui/modal_reducer';
import sideNav from "./ui/side_navbar_reducer"
import helpers from "./helpers"
const uiReducer = combineReducers({
    modal,
    sideNav,
    helpers
});

export default uiReducer;