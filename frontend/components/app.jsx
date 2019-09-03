import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import HomeContainer from "./home/home_container"
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import {AuthRoute} from '../util/route_util'


const App = () =>(
  <div>
    <header>
      <Link to="/" className="header-link">
        <h2>yooo what it doo bb</h2>
      </Link>
        <HomeContainer />
    </header>
    
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
)

export default App