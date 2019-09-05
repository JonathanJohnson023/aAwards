import React from 'react'
import { Link } from 'react-router-dom'

export default ({ user, logout, openModal }) => {
  let display;
  if (user) {
    display = {
            link1: <Link className="user-page" to={`/api/user/${user.id}`}><span >{user.username ? `Welcome, ${user.username}` : user.email }</span></Link>,
            link2: <a onClick={logout}>Logout</a>
    }
   } else{ 
     display = {
         link1: <a className="btn" onClick={()=> openModal('signup')}>Signup</a>,
         link2: <a className="btn" onClick={()=> openModal('login')}>Login</a>
     }
    }

    return (
      <div className="navbar">
        <div className="west-side">
          <div className="item menu">
            <i className="fas fa-bars"></i>
            <span className="icon-text">Menu</span>
          </div>
        </div>

        <div className="east-side">
          <Link to="/" className="logo-link">
            <img className="the-logo" src="/assets/take2-of-logo.png"/>
          </Link>

          <div className="the-righters">
            <div className="item serch">
              <i className="fas fa-search"></i>
            </div>
            <div className="user-stuff">
              <ul className="username-email">
                <li className="link1">{display.link1}</li>
                <li className="link2">{display.link2}</li>
              </ul>
              <div className="submit-btn">
                <h2 className="submit-btn-text">SUBMIT YOUR SITE!</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
} 

