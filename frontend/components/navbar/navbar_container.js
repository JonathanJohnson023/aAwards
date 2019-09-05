import React from "react";
import {connect} from "react-redux"
import NavBar from './navbar'
import {signup, login, logout} from "../../actions/session_actions"
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state) =>({
  user: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) =>({ 
  openSideNav: () => dispatch(openModal("navbar")),
  openModal: modal => dispatch(openModal(modal)),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)