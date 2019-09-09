import { connect } from 'react-redux';
import { fetchWebsite } from '../../actions/website_actions';
import WebsiteShow from './website_show';

const mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.match.params.websiteId)
  let website = state.entities.websites[id]
  return({
    website 
  })
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchWebsite: () => dispatch(fetchWebsite(parseInt(ownProps.match.params.websiteId)))
});

export default connect(mapStateToProps, mapDispatchToProps)(WebsiteShow);
