import React from 'react';
import WebsiteIndexItem from './website_index_item';
import {Link} from 'react-router-dom';

class WebsiteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
    this.props.fetchWebsites()
    this.props.fetchTopWebsite()
      // particlesJS.load('canvas', `${window.particles}`, function(){})
      // ).then()
  }
  componentDidUpdate(){
    if(this.props.history.location.pathname !== "/websites"){
      <script>{particlesJS.load('canvas', `${window.particles}`, function(){})}</script>
    }
  }
  render() {
    let display;
    if(!this.props.topWebsite){
      this.props.fetchTopWebsite()
    }
    if(this.props.history.location.pathname !== "/websites" && this.props.topWebsite){
      display = <div className="the-high-roller">
                  <div className="cover-art">
                    <Link to={`/websites/${this.props.topWebsite.id}`} className="the-content-link">
                      <img className="high-roller-title" src={this.props.topWebsite.coverPhoto} />
                    </Link>
                    <div className="canvas" id="canvas"/>
                  </div>
                  <strong className="the-index-fav">Highest Scored Website</strong>
                  <a href={this.props.topWebsite.url} target="_blank" className="cover-button-botleft">
                    <span className="bottom-left-a-tag">Visit Site</span>
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
            this.props.websites.map(website => (
              website.id != this.props.topWebsite.id ? 
              <WebsiteIndexItem
              key={website.id}
              website={website}
              fetchWebsite={this.props.fetchWebsite}
              />  : " "
              )
            )
          }
        </ul>
      </div>
    )
  }
}

export default WebsiteIndex;
