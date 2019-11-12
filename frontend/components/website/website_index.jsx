import React from 'react';
import WebsiteIndexItem from './website_index_item';
import {Link} from 'react-router-dom';

class WebsiteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    
    this.props.fetchWebsites()
    await this.props.fetchTopWebsite()
    var element = document.querySelector('.chart');
    if(this.props.history.location.pathname !== "/websites"){
      // particlesJS.load('canvas', `${window.particles}`, function(){})
      <script>{particlesJS.load('canvas', `${window.particles}`, function(){})}
       { new EasyPieChart(element, {
        scaleColor: false,
        lineWidth: 4,
        lineCap: 'butt',
        barColor: '#2F3C4F',
        trackColor:	"#f5f5f5",
        size: 160,
        animate: 1000
      })}
      </script>
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.match.path === "/websites" && this.props.match.path === "/"){
      <script>{particlesJS.load('canvas', `${window.particles}`, function(){})}</script>
    }
  }

  
  render() {
    let display;
    let rating;
    if( this.props.topWebsite){
      rating = this.props.topWebsite.score_avg + '0'
    }
    if(this.props.history.location.pathname !== "/websites" && this.props.topWebsite){
      display = <div className="the-high-roller">
                  <div className="cover-art">
                    <Link to={`/websites/${this.props.topWebsite.id}`} className="the-content-link">
                      <img className="high-roller-title" src={this.props.topWebsite.cover} />
                    </Link>
                    <div className="chart" data-percent={rating}>
                      <span>{`${this.props.topWebsite.score_avg}.0`}</span>
                      <span id="chart-bottom">Score Average</span>
                    </div>
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
