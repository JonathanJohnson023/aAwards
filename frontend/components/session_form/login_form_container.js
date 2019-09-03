import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import {login} from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formtype: 'LogIn'
});



const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: theDude => dispatch(login(theDude))
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);