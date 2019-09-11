import React from 'react';
import WebsiteIndex from './website_index';
import { fetchWebsites, fetchWebsite, fetchTopWebsite } from '../../actions/website_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownprops) => {
  const topWebsite = state.ui.helpers.topWebsite
  const websites = Object.values(state.entities.websites)
  return ({
    topWebsite,
    websites
  })
}

const mapDispatchToProps = (dispatch) => ({
  fetchTopWebsite: () => dispatch(fetchTopWebsite()),
  fetchWebsites: () => dispatch(fetchWebsites()),
  fetchWebsite: id => dispatch(fetchWebsite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WebsiteIndex);

