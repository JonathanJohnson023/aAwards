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
import WebsitesCreateContainer from "./website/website_create_container";
import WebsiteUpdateContainer from "./website/website_update_container"
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () =>(
  <div className="the-big-boy">
      <SideNavBar />
      <div id="main">
        <Modal />
        <header>
          <NavBarContainer />
        </header>
        <Switch>
          <ProtectedRoute exact path="/websites/new" component={WebsitesCreateContainer} />
          <ProtectedRoute path="/websites/:websiteId/edit" component={WebsiteUpdateContainer} />
          <Route path="/websites/:websiteId" component={WebsiteShowContainer} />
          <Route path="/websites" component={WebsiteIndexContainer} /> 
          <Route exact path="/" component={WebsiteIndexContainer} />
          <Redirect to="/" />
        </Switch>
    </div>
  </div>
)

export default App