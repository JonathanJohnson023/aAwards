import { combineReducers } from 'redux';
import modal from './ui/modal_reducer';
import sideNav from "./ui/side_navbar_reducer"

const uiReducer = combineReducers({
    modal,
    sideNav
});

export default uiReducer;