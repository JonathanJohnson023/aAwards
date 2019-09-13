import * as APIUtil from '../util/website_api_util';

export const RECEIVE_WEBSITES = 'RECEIVE_WEBSITES';
export const RECEIVE_WEBSITE = 'RECEIVE_WEBSITE';
export const RECEIVE_VOTE = 'RECEIVE_VOTE';
export const RECEIVE_WEBSITE_ERRORS = 'RECEIVE_WEBSITE_ERRORS';
export const RECEIVE_TOP_WEBSITE = " RECEIVE_TOP_WEBSITE"
export const REMOVE_WEBSITE = "REMOVE_WEBSITE"

export const receiveErrors = errors => ({
  type: RECEIVE_WEBSITE_ERRORS,
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
  APIUtil.fetchTopWebsite().then(topWebsite => (
    dispatch({type: RECEIVE_TOP_WEBSITE, topWebsite})
  ))
);

export const fetchWebsite = id => dispatch => (
  APIUtil.fetchWebsite(id).then(payload => (
    dispatch(receiveWebsite(payload))
  ))
);

export const createWebsite = website => dispatch => (
  APIUtil.createWebsite(website).then(website => {
   return ( 
     dispatch(receiveWebsite(website))
  )
  }).fail((error) => dispatch(receiveErrors(error)))
);

export const deleteWebsite = id => dispatch => (
  APIUtil.deleteWebsite(id).then(payload => (
    dispatch({type: REMOVE_WEBSITE, reportId: id })
  ))
)

export const updateWebsite = (form, id)=> dispatch => (
  APIUtil.updateWebsite(form, id).then(website => (
    dispatch(receiveWebsite(website))
  ))
);
// , error => (
//   dispatch(receiveErrors(error.responseJSON))
// )
// 
// 
// 
// window.fetchWebsites = fetchWebsites