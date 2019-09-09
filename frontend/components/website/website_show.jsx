import React from 'react';
import { Link } from 'react-router-dom';

class WebsiteShow extends React.Component {

  componentDidMount() {
    this.props.fetchWebsite();
  }

  render () {
    if(!(this.props.website)){
      return(
        <div></div>
      )
    }
    const {website} = this.props
    return (
      <div>
        <div className="the-high-roller">
          <img className="show-website-cover" src={website.img_url} />
        </div>
        <h1>{website.title}</h1>
        <h1>{website.description}</h1>
      </div>
    );
  }
}

export default WebsiteShow;
