import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import {signup} from "../../actions/session_actions";
import { openModal, closeModal } from '../../actions/modal_actions';
import {clearErrors} from "../../actions/session_actions";


const mapStateToProps = ({errors}) => {
   return{
      errors: errors.session,
      formtype: "Register",
      buttontype: 'SignUp'
   }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
   processForm: theDude => dispatch(signup(theDude)),
   otherForm: (
      <span>Are you a member?
         <a className="other-form-btn"
         onClick={() => dispatch(openModal('login'))}>  Login now 
         </a></span>
    ),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);