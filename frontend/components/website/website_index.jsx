import React from 'react';
import WebsiteIndexItem from './website_index_item';

class ChirpIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchWebsites().then()
    // particlesJS.load('canvas', `${window.particles}`, function(){})
    // ).then()
  }

  componentDidUpdate(){
    if(this.props.history.location.pathname !== "/websites"){
      <script>{particlesJS.load('canvas', `${window.particles}`, function(){})}</script>
    }
  }


  render() {
    const { websites } = this.props;

    let display;
    if(this.props.history.location.pathname !== "/websites"){
      display = <div className="the-high-roller">
                  <div className="cover-art">
                    <img className="high-roller-title" src={window.TU} />
                    <div className="canvas" id="canvas"/>
                  </div>
                  <strong className="the-index-fav">Highest Scored Website</strong>
                  <div className="cover-button-botleft"><a className="bottom-left-a-tag" href="https://trevoruptain.com/" target="_blank">Visit Site</a></div>
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
