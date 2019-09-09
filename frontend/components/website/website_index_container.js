import React from 'react';
import WebsiteIndex from './website_index';
import { fetchWebsites, fetchWebsite } from '../../actions/website_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  websites: Object.values(state.entities.websites)
  
});

const mapDispatchToProps = (dispatch) => ({
  fetchWebsites: () => dispatch(fetchWebsites()),
  fetchWebsite: id => dispatch(fetchWebsite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WebsiteIndex);

