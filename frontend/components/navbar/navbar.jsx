import React from 'react'
import { Link } from 'react-router-dom'

export default ({ user, logout }) => {
  let display;
  if (user) {
    display = {
            link1: <Link to={`/api/user/${user.id}`}><span className="username/email">{user.username ? `Welcome, ${user.username}` : user.email }</span></Link>,
            link2: <button onClick={logout}>Logout</button>
    }
   } else{ 
     display = {
         link1: <Link className="btn" to="/signup" >Signup</Link>,
         link2: <Link className="btn" to="/login" >Login</Link>
     }
    }

    return (
      <div className="navbar">
        <div className="east-side">
          <div className="the-righters">
          <Link to="/" className="logo-link">
            <img className="the-logo" src="/assets/take2-of-logo.png"/>
          </Link>
            <div className="link1">{display.link1}</div>
            <div className="link2">{display.link2}</div>
          </div>
        </div>
      </div>
    )
} 

