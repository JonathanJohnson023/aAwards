import { connect } from "react-redux";
import { createWebsite } from '../../actions/website_actions';
import WebsiteCreate from "./website_create"
import {clearErrors} from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  const website = state.entities.websites[Object.keys(state.entities.websites).length - 1]

  return ({
    currentUser: state.entities.users[state.session.id],
    errors: Object.values(state.errors.session),
    website
  })
};

const mapDispatchToProps = (dispatch, ownProps) => {
  
  return({
  createWebsite: website => dispatch(createWebsite(website)),
  clearErrors: () => dispatch(clearErrors()),
  })
};



export default connect(mapStateToProps, mapDispatchToProps)(WebsiteCreate)