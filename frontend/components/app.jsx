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
import WebsiteShowContainer from "./website/website_show_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () =>(
  <div>
      <SideNavBar />
      <div id="main">
        <Modal />
        <header>
          <NavBarContainer />
        </header>
        <Switch>
          {/* <ProtectedRoute exact path="/websites/new" component={WebsitesCreateContainer} /> */}
          <Route path="/websites/:websiteId" component={WebsiteShowContainer} />
          <Route path="/" component={WebsiteIndexContainer} />
        </Switch>
    </div>
  </div>
)

export default App