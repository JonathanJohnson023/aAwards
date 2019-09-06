import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import NavBarContainer from "./navbar/navbar_container";
import Modal from "./modal/modal"
import SideNavBar from './navbar/side_navbar';


const App = () =>(
  <div>
      <SideNavBar />
      <div id="main">
        <Modal />
        <header>
          <NavBarContainer />
        </header>
        <Switch>
        {/* authroute for only people not logged in  */}
        {/* protectedRoute for only USERS logged in  */}
        </Switch>
    </div>
  </div>
)

export default App