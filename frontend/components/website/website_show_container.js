import { connect } from 'react-redux';
import { fetchWebsite, fetchTopWebsite } from '../../actions/website_actions';
import WebsiteShow from './website_show';

const mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.match.params.websiteId)
  let website = state.entities.websites[id]
  const topWebsite = state.ui.helpers.topWebsite
  return({
    website,
    topWebsite
  })
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTopWebsite: () => dispatch(fetchTopWebsite()),
  fetchWebsite: () => dispatch(fetchWebsite(parseInt(ownProps.match.params.websiteId)))

});

export default connect(mapStateToProps, mapDispatchToProps)(WebsiteShow);
