import React from 'react';
import { Link } from 'react-router-dom';


export default ({ user, logout, openModal, openSideNav }) => {
  let display;
  if (user) {
    display = {
            link1: <Link className="user-page" to={`/api/user/${user.id}`}><span >{user.username ? `Welcome, ${user.username}` : user.email }</span></Link>,
            link2: <li className="link2" onClick={logout}><a>Logout</a></li>
    }
   } else{ 
     display = {
         link1:  <li className="link1" onClick={()=> openModal('signup')}><a className="btn">Signup</a></li>,
         link2:  <li className="link2" onClick={()=> openModal('login')}><a className="btn">Login</a></li>
     }
    }

    const toggleNav = () => {
      openSideNav("open")
      const main = document.getElementById("main")
      main.classList.add("move")
    }

    return (
      <div className="navbar">
        
        <div className="west-side" onClick={toggleNav}>
          <div className="item menu">
            <i className="fas fa-bars"></i>
            <span className="icon-text">Menu</span>

          </div>
        </div>

        <div className="east-side">
          <Link to="/" className="logo-link">
            <img className="the-logo" src={window.headerLogo}/>
          </Link>

          <div className="the-righters">
            <div className="item serch">
              <i className="fas fa-search"></i>
            </div>
            <div className="user-stuff">
              <ul className="username-email">
                {display.link1}
                {display.link2}
              </ul>
              
              {user ?
              <Link to="/websites/new" >
                <div className="submit-btn" >
                  <h2 className="submit-btn-text">SUBMIT YOUR SITE!</h2>
                </div>
              </Link> 
              : 
              <div onClick={()=> openModal('login')} >
                <div className="submit-btn" >
                  <h2 className="submit-btn-text">SUBMIT YOUR SITE!</h2>
                </div>
              </div> 
              }
            </div>
          </div>
        </div>
      </div>
    )
} 

