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
import WebsiteIndexContainer from './website/website_index_container';


const App = () =>(
  <div>
      <SideNavBar />
      <div id="main">
        <Modal />
        <header>
          <NavBarContainer />
        </header>
        <WebsiteIndexContainer />
        <Switch>
        {/* authroute for only people not logged in  */}
        {/* protectedRoute for only USERS logged in  */}
        </Switch>
    </div>
  </div>
)

export default App