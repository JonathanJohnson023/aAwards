import React from 'react';
import WebsiteIndexItem from './website_index_item';

class ChirpIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchWebsites().then(
    particlesJS.load('canvas', "assets/particles.json", function(){})
    ).then()
    
  }

  render() {
    const { websites } = this.props;

    return (
      <div>
        
        <div className="the-high-roller">
          <div className="canvas" id="canvas"/>
          <h1 className="the-index-fav">Highest Scored Website</h1>
        </div>
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
