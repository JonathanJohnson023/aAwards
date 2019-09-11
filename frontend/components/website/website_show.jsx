import React from 'react';
import { Link } from 'react-router-dom';
import { setPriority } from 'os';

class WebsiteShow extends React.Component {

  componentDidMount() {
    this.props.fetchWebsite();
    this.props.fetchTopWebsite()
  }

  render () {
    if(!this.props.topWebsite){
      this.props.fetchTopWebsite()
    }
    if(!(this.props.website)){
      return(
        <div></div>
      )
    }
    const {website} = this.props
    let particle;
    let cover; 
    if(website.id === this.props.topWebsite.id){
      particle = "canvas";
      cover = "high-roller-title";
      <script>{particlesJS.load('canvas', `${window.particles}`, function(){})}</script>
    } else { 
      cover = "show-website-cover"
    }
    return (
      <div>
        <div className="the-high-roller">
          <div className="cover-art">
            <img className={cover} src={website.img_url} />
            <div className={particle} id={particle}/>
          </div>
        </div>
        <h1>{website.title}</h1>
        <h1>{website.description}</h1>
      </div>
    );
  }
}

export default WebsiteShow;
