import React from 'react';
import WebsiteIndexItem from './website_index_item';
import {Link} from 'react-router-dom';

class WebsiteIndex extends React.Component {
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
                    {/* <Link to={`/websites/${website.id}`} > */}
                      <img className="high-roller-title" src={window.TU} />
                    {/* </Link> */}
                    <div className="canvas" id="canvas"/>
                  </div>
                  <strong className="the-index-fav">Highest Scored Website</strong>
                  <a href="https://trevoruptain.com/" target="_blank" className="cover-button-botleft">
                    <span className="bottom-left-a-tag" href="https://trevoruptain.com/" target="_blank">Visit Site</span>
                  </a>
                </div>
    }
    return (
      <div className="more-or-less-home">
        
        {display}

        <div className="the-index-header">
          <span>Absolute Excellence</span>
          <span>Ordered by Highst score</span>
        </div>
        <ul className="the-website-index-ul">
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

export default WebsiteIndex;
