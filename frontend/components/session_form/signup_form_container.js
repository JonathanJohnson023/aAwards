import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import {signup} from "../../actions/session_actions";


const mapStateToProps = (state, ownProps) => ({
   errors: state.errors.session,
   formtype:'SignUp'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
   processForm: theDude => dispatch(signup(theDude))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);