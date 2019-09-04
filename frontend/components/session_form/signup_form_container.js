import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import {signup} from "../../actions/session_actions";
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => ({
   errors: state.errors.session,
   formtype:'SignUp'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
   processForm: theDude => dispatch(signup(theDude)),
   otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);