import { connect } from "react-redux";
import WebsiteUpdateForm from "./website_update";
import {updateWebsite, fetchWebsite, deleteWebsite} from "../../actions/website_actions"

const mapStateToProps = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id]
    const currentWebsite = state.entities.websites[parseInt(ownProps.match.params.websiteId)]
    return {
        currentUser,
        currentWebsite
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchWebsite: () => dispatch(fetchWebsite(parseInt(ownProps.match.params.websiteId))),
  deleteWebsite: (id) => dispatch(deleteWebsite(id)),
  updateWebsite: (website, id) => dispatch(updateWebsite(website, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(WebsiteUpdateForm);