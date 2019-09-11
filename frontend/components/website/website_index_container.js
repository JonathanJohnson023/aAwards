import React from 'react';
import WebsiteIndex from './website_index';
import { fetchWebsites, fetchWebsite, fetchTopWebsite } from '../../actions/website_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownprops) => {
  return ({
  websites: Object.values(state.entities.websites),
  topWebsite: state.entities.websites.topWebsite
  })
}

const mapDispatchToProps = (dispatch) => ({
  fetchTopWebsite: () => dispatch(fetchTopWebsite()),
  fetchWebsites: () => dispatch(fetchWebsites()),
  fetchWebsite: id => dispatch(fetchWebsite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WebsiteIndex);

