import React from 'react';
import {closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';


function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case "credits":
      component = <div className="modal open">
          <div className="modal-session-form">
            <a href="https://github.com/JonathanJohnson23" target="_blank">github</a>
            <a href="https://www.linkedin.com/in/jonathan-johnson-070807195/" target="_blank">linkedin</a>
          </div>
        </div>
      break;
    case "vote":
      component = <div className="modal open">
        <div className="modal-session-form">
          <h1>coming soon</h1>
        </div>
      </div>
      break;
    case "jobs && talent":
      component = <div className="modal open">
        <div className="modal-session-form">
          <h1>coming soon</h1>
        </div>
      </div>
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
