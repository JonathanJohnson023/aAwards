import * as APIUtil from '../util/website_api_util';

export const RECEIVE_WEBSITES = 'RECEIVE_WEBSITES';
export const RECEIVE_WEBSITE = 'RECEIVE_WEBSITE';
export const RECEIVE_VOTE = 'RECEIVE_VOTE';

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const receiveWebsites = websites => ({
  type: RECEIVE_WEBSITES,
  websites,
});

export const receiveWebsite = (website) => {
  
  return ({
  type: RECEIVE_WEBSITE,
  website
  })
};

export const fetchWebsites = () => dispatch => (
  APIUtil.fetchWebsites().then(website => (
    dispatch(receiveWebsites(website))
  ))
);

export const fetchTopWebsite = () => dispatch => (
  APIUtil.fetchWebsites().then(website => (
    dispatch(receiveWebsite(website))
  ))
);

export const fetchWebsite = id => dispatch => (
  APIUtil.fetchWebsite(id).then(payload => (
    dispatch(receiveWebsite(payload))
  ))
);

export const createWebsite = website => dispatch => (
  APIUtil.createWebsite(website).then(website => (
    dispatch(receiveWebsite(website))
  )), error => (
    dispatch(receiveErrors(error.responseJSON))
  )
);

window.fetchWebsites = fetchWebsites