import React from 'react';
import { Link } from 'react-router-dom';

class WebsiteShow extends React.Component {

  componentDidMount() {
    this.props.fetchWebsite();
  }

  render () {
    return (
      <div>
        <h1>{this.props.website.title}</h1>
        <h1>{this.props.website.des}</h1>
        <h6>I HOPE THIS WORKS </h6>
      </div>
    );
  }
}

export default WebsiteShow;
