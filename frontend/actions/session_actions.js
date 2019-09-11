import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})
 
export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch({type: RECEIVE_CURRENT_USER, user})
  ), error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => {

    return(
        dispatch({type: RECEIVE_CURRENT_USER, user})
    )
  }, error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch({type: LOGOUT_CURRENT_USER})
  ))  
);

