import React from 'react';
import { Link } from 'react-router-dom';
import { setPriority } from 'os';

class WebsiteShow extends React.Component {
  constructor(props){
    super(props)

  }

  async componentDidMount() {
    await this.props.fetchWebsite();
    await this.props.fetchTopWebsite();
    var element = document.querySelector('.chart');
    <script>
    {particlesJS.load('canvas-left', `${window.particles}`, function(){})}
    {particlesJS.load('canvas-right', `${window.particles}`, function(){})}
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

  render () {
    let particle = "canvas";
    let cover = "show-website-cover"
    let title = "show-title"
    let rating;
    if(!this.props.topWebsite){
      this.props.fetchTopWebsite()
    }
    
    if(!(this.props.website)){
      return (
        <div></div>
      )
    }
    
    const {website, currentUser, topWebsite} = this.props
    // let particle = "the-hidden"
    if( website && topWebsite){
      rating = website.score_avg + '0'
      if(website.id === topWebsite.id){
        cover = "high-roller-title";
        title = "the-hidden";
      }
    }
    return (
      <div className="the-full-show">
        <div className="the-high-roller show-page">
          <div className="cover-art">
            <div className="canvas-left" id="canvas-left"/>
            <div className="chart" data-percent={rating}>
              <span>{`${website.score_avg}.0`}</span>
              <span id="chart-bottom">Score Average</span>
            </div>
            <img className={cover} src={website.cover ? website.cover : website.thumbnail} />
            <a className={title} href={website.url} target="_blank" >{website.title}</a>
            <div className='canvas-right' id='canvas-right'/>
          </div>
          <a href={website.url} target="_blank" className="cover-button-botleft">
            <span className="bottom-left-a-tag">Visit Site</span>
          </a>
        </div>
          {currentUser === null ? <div></div> 
          : currentUser.id === website.author_id ? 
          <Link to={`/websites/${website.id}/edit`} className="bottom-right-show-button"><span>Edit Info</span></Link> 
          : ""
          }
        <div className="show-body">
          <p className="show-description">{website.description}</p>
        </div>
        
        <div className="website-show-direction">
        </div>
      </div>
    );
  }
}

export default WebsiteShow;
