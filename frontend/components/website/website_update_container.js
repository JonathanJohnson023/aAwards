import { connect } from "react-redux";
import WebsiteUpdateForm from "./website_update";
import {updateWebsite} from "../../actions/website_actions"

const mapStateToProps = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id]
    const currentWebsite = state.entities.websites[parseInt(ownProps.match.params.websiteId)]
    return {
        currentUser,
        currentWebsite
    };
};

const mapDispatchToProps = (dispatch) => ({
  updateWebsite: website => dispatch(updateWebsite(website))
});

export default connect(mapStateToProps, mapDispatchToProps)(WebsiteUpdateForm);