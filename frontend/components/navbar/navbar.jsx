import React from 'react'
import { Link } from 'react-router-dom'

export default ({ user, logout, openModal }) => {
  let display;
  if (user) {
    display = {
            link1: <Link to={`/api/user/${user.id}`}><span className="username/email">{user.username ? `Welcome, ${user.username}` : user.email }</span></Link>,
            link2: <button onClick={logout}>Logout</button>
    }
   } else{ 
     display = {
         link1: <button className="btn" onClick={()=> openModal('signup')}>Signup</button>,
         link2: <button className="btn" onClick={()=> openModal('login')}>Login</button>
     }
    }

    return (
      <div className="navbar">
        <div className="west-side">
          <div className="item menu">
             
          </div>
        </div>

        <div className="east-side">
          <Link to="/" className="logo-link">
            <img className="the-logo" src="/assets/take2-of-logo.png"/>
          </Link>

          <div className="the-righters">
            <div className="item serch">

            </div>
            <div className="user-stuff">
              <div className="link1">{display.link1}</div>
              <div className="link2">{display.link2}</div>
            </div>
            <div> 
              
            </div>

          </div>
        </div>
      </div>
    )
} 

