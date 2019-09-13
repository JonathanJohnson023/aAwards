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
      return (
        <div></div>
      )
    }
    
    const {website, currentUser, topWebsite} = this.props
    let particle = "the-hidden"
    let cover = "show-website-cover"
    let title = "show-title"
    if(website.id === topWebsite.id){
      particle = "canvas";
      cover = "high-roller-title";
      title = "the-hidden";
      <script>{particlesJS.load('canvas', `${window.particles}`, function(){})}</script>
    }
    return (
      <div className="the-full-show">
        <div className="the-high-roller show-page">
          <div className="cover-art">
            <img className={cover} src={website.cover ? website.cover : website.thumbnail} />
            <a className={title} href={website.url} target="_blank" >{website.title}</a>
            <div className={particle} id={particle}/>
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
