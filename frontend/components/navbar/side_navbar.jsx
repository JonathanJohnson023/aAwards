import React from 'react'
import { connect } from 'react-redux';
import {closeSide} from "../../actions/modal_actions";
import {Link} from "react-router-dom";
import { openModal } from "../../actions/modal_actions";

function SideNav(props) {
  let showEle = "hide"
  if(props.nav){
    showEle = "show"
  }

  const toggleNav = (modal) =>{
    // debugger
    props.closeNav()
    const main = document.getElementById("main")
    main.classList.remove("move")
    if(modal) props.openModal(modal)
  }

  return(
    <div className={`side-nav-background ${showEle}`} onClick={toggleNav}>
      <div className="side-nav-child" onClick={e => e.stopPropagation()}>
        <div className="side-nav-closers">
          <h1 className="side-x-close" onClick={toggleNav}>close</h1>
          <div className="modal-close" onClick={toggleNav}> 
            <i className="fas fa-times" onClick={toggleNav}></i>
          </div>
        </div>
        <div className="das-side-links">
          <Link to="/"><span onClick={toggleNav} className="side-nav-item" id="home">Home</span></Link>
          <Link to="/websites"><span onClick={toggleNav} className="side-nav-item">Websites</span></Link>
          <span className="side-nav-item in-progress"  onClick={() => toggleNav("vote")}>Vote</span> {/* <Link to=""></Link> */}
          <span className="side-nav-item in-progress"  onClick={() => toggleNav("jobs && talent")}>Jobs && Talent</span> {/* <Link to=""></Link> */}
          <span onClick={() => toggleNav("credits")} className="side-nav-item">Credits</span>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    nav: state.ui.sideNav
  };
};


const mapDispatchToProps = dispatch => {
  return {
    closeNav: () => dispatch(closeSide()),
    openModal: (theCase) => dispatch(openModal(theCase))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
