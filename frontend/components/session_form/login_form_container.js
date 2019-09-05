import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import {login} from "../../actions/session_actions";
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formtype: 'LogIn'
});



const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: theDude => dispatch(login(theDude)),
    otherForm: (
      <span>Are you a member?
        <a onClick={() => dispatch(openModal('signup'))}> Login now
        </a></span>
    ),
    closeModal: () => dispatch(closeModal())
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);