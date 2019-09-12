import { connect } from "react-redux";
import WebsiteUpdateForm from "./website_update";
import {updateWebste} from "../../actions/website_actions"

const mapStateToProps = (state) => {
    let currentUser = state.entities.users[state.session.id]
    let currentWebsite = state.entities.websites[state.session.id]
    return {
        currentUser,
        currentWebsite
    };
};

const mapDispatchToProps = (dispatch) => ({
  updateWebste: website => dispatch(updateWebste(website))
});

export default connect(mapStateToProps, mapDispatchToProps)(WebsiteUpdateForm);