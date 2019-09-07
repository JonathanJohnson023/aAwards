import { combineReducers } from 'redux'
import users from './users_reducer'
import websites from "./websites_reducer"

const entitiesReducer = combineReducers({
   users,
   websites
 });

export default entitiesReducer