import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import {createNewUser} from "../../actions/session_actions";


const mapStateToProps = (state, ownProps) => ({
   errors: state.errors.session,
   formtype:'Sign Up'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
   processForm: theDude => dispatch(createNewUser(theDude))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);