import { connect } from "react-redux";
import WebsiteUpdateForm from "./website_update";

const mapStateToProps = (state) => {
    let currentUser = state.entities.users[state.session.id]
    let currentWebsite = state.entities.websites[state.session.id]
    return {
        currentUser,

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: user => dispatch(updateUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WebsiteUpdateForm);