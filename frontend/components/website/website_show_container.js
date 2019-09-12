import { connect } from 'react-redux';
import { fetchWebsite, fetchTopWebsite } from '../../actions/website_actions';
import WebsiteShow from './website_show';

const mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.match.params.websiteId)
  let website = state.entities.websites[id]
  let topWebsite = state.ui.helpers.topWebsite
  let currentUser;
  currentUser = state.session.id ? state.entities.users[state.session.id] : null
  return({
    id,
    website,
    currentUser,
    topWebsite
  })
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTopWebsite: () => dispatch(fetchTopWebsite()),
  fetchWebsite: () => dispatch(fetchWebsite(parseInt(ownProps.match.params.websiteId)))

});

export default connect(mapStateToProps, mapDispatchToProps)(WebsiteShow);
