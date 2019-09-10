import React from 'react';
import WebsiteIndexItem from './website_index_item';

class ChirpIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchWebsites().then(
    particlesJS.load('canvas', `${window.particles}`, function(){})
    ).then()
  }

  render() {
    const { websites } = this.props;

    let display;
    if(this.props.history.location.pathname !== "/websites"){
      display = <div className="the-high-roller">
                  <div className="canvas" id="canvas"/>
                  <h1 className="the-index-fav">Highest Scored Website</h1>
                </div>
    }
    return (
      <div>
        {display}
        <div className="the-index-header">
          <span>Absolute Excellence</span>
          <span>Ordered by Highst score</span>
        </div>
        <ul className="the-website-index">
          {
            websites.map(website => (
              website.title != "Trevor Uptain" ? 
              <WebsiteIndexItem
              key={website.id}
              website={website}
              fetchWebsite={this.props.fetchWebsite}
              /> : ""
              )
            )
          }
        </ul>
      </div>
    )
  }
}

export default ChirpIndex;
