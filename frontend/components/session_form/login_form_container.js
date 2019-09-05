import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import {login} from "../../actions/session_actions";
import { openModal, closeModal } from '../../actions/modal_actions';
import {clearErrors} from "../../actions/session_actions";

const mapStateToProps = ({errors}) => {
    return{
        errors: errors.session,
        formtype: "Sign in to continue",
        buttontype: 'LogIn'
    }
};



const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: theDude => dispatch(login(theDude)),
    otherForm: (
      <span>Not a member yet? 
        <a className="other-form-btn"
        onClick={() => dispatch(openModal('signup'))}> Register now
        </a></span>
    ),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal())
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);