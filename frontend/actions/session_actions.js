import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});
 
export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch({type: RECEIVE_CURRENT_USER, currentUser: user})
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch({type: RECEIVE_CURRENT_USER, currentUser: user})
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch({type: LOGOUT_CURRENT_USER})
  ))  
);

// window.signup = signup;
// window.login = login;
// window.logout = logout;