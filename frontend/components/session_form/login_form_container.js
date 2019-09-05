import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import {login} from "../../actions/session_actions";
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formtype: "Sign in to continue",
    buttontype: 'LogIn'
});



const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: theDude => dispatch(login(theDude)),
    otherForm: (
      <span>Not a member yet? 
        <a className="other-form-btn"
        onClick={() => dispatch(openModal('signup'))}> Register now
        </a></span>
    ),
    closeModal: () => dispatch(closeModal())
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);