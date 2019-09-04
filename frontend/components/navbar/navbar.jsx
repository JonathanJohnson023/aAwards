import React from 'react'
import { Link } from 'react-router-dom'

export default ({ user, logout }) => {
  let display;
  if (user) {
    display = {
            link1: <span>{user.username ? `Welcome, ${user.username}` : user.email }</span>,
            link2: <button onClick={logout}>Logout</button>
    }
   } else{ 
     display = {
         link1: <Link className="btn" to="/signup" >Signup</Link>,
         link2: <Link className="btn" to="/login" >Login</Link>
     }
    }

    return (
      <div>
         {display.link1}    
         {display.link2}    
      </div>
    )
} 

