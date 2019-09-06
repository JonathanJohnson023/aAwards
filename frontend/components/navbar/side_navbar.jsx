import React from 'react'
import { connect } from 'react-redux';
import {closeSide} from "../../actions/modal_actions";
import {Link} from "react-router-dom";

function SideNav(props) {
  let showEle = "hide"
  if(props.nav){
    showEle = "show"
  }

  const toggleNav = () =>{
    props.closeNav()
    const main = document.getElementById("main")
    main.classList.remove("move")
  }

  return(
    <div className={`side-nav-background ${showEle}`} onClick={toggleNav}>
      <div className="side-nav-child" onClick={e => e.stopPropagation()}>
        <Link to="/"><span className="side-nav-item">Home</span></Link>
        <Link to=""><span className="side-nav-item">Websites</span></Link>
        <Link to=""><span className="side-nav-item">Vote</span></Link>
        <Link to=""><span className="side-nav-item">Jobs&&Talent</span></Link>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
