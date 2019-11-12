import React from "react";
import { withRouter } from 'react-router-dom';

class WebsiteUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: "",
          url: "",
          description: "",
          author_id: this.props.currentUser.id,
          cover: null,
          thumbnail: null,
          screenshots: null,
          coverUrl: null
        };

        this.deleteWebsiteFunc = this.deleteWebsiteFunc.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.update =  this.update.bind(this)
    }

    handleSubmit(e) {
      e.preventDefault();
      const formData = new FormData();
      formData.append('website[title]', this.state.title);
      formData.append('website[url]', this.state.url);
      formData.append('website[description]', this.state.description);
      formData.append('website[author_id]', this.state.author_id);
      if(this.state.cover) formData.append('website[cover_photo]', this.state.cover);
      if(this.state.thumbnail)formData.append('website[thumbnail_photo]', this.state.thumbnail);
      if(this.state.screenshots)formData.append('website[screenshot_photos]', this.state.screenshots);
      console.log(formData)
      this.props.updateWebsite(formData, this.props.currentWebsite.id).then(ele => {
        this.props.history.push(`/websites/${ele.website.id}`)
      })
  };
  update(type) {
    return (e) => {
        this.setState({ [type]: e.target.value });
    };
  }

    handleCancel(e){
        e.preventDefault();
        this.props.history.push(`/webiste/${this.props.currentWebsite.id}`);
    }

    componentDidMount(){
      this.props.fetchWebsite()
    }

    componentDidUpdate(prevProps){
      if(prevProps.match.params.websiteId !== this.props.match.params.websiteId)
        this.props.fetchWebsite()
      if(!prevProps.currentWebsite && this.props.currentWebsite){
        let website = Object.assign({}, this.props.currentWebsite)
        delete website.cover
        delete website.screenshots
        delete website.thumbnail
        this.setState(website)
      }
    }

    deleteWebsiteFunc(){
      this.props.deleteWebsite(this.props.currentWebsite.id).then(() =>
        this.props.history.push(`/`)
      )
    }

  render() {
    if(!(this.props.currentWebsite)){
      return (
        <div></div>
      )
    }

    let {currentUser, currentWebsite} = this.props
    let cover = "show-website-cover"
    let title = "show-title"

    return (
      <div className="website-submission">
        <form className="website-create-form" onSubmit={this.handleSubmit}>
          <div className="create-website-header">
            <h2>Update Your Website</h2>
          </div>
          <div className="the-high-roller">
            <div className="cover-art">
              <img className={cover} src={currentWebsite.cover ? currentWebsite.cover : currentWebsite.thumbnail} />
              <a className={title} href={currentWebsite.url} target="_blank" >{currentWebsite.title}</a>
            </div>
          </div>
          <div className="create-wrapper">

            <div className="website-create-input-fields">
              <ul className="create-website-ul">
                <li className="create-website-lis">
                  <label className="create-website-lables"> Title</label>
                    <input className="create-website-input"
                      type="text"
                      value={this.state.title}
                      onChange={this.update('title')}
                      // placeholder="Website Title"
                    />
                </li>
                <li className="create-website-lis">
                  <label className="create-website-lables"> Website URL</label>
                    <input className="create-website-input"
                      type="text" 
                      value={this.state.url} 
                      onChange={this.update('url')} 
                      // placeholder="Website URL"
                    />
                </li>
                <li className="create-website-lis textarea">
                  <label className="create-website-lables"> Website Bio</label>
                    <textarea className="create-website-input textarea"
                      value={this.state.description} 
                      onChange={this.update('description')} 
                      // placeholder="Website Description"
                    />
                </li>
              </ul>
            </div>
            <p>
              <input className="session-submit website-create" 
              type="submit" 
              value="Submit"
              />
            </p>
            </div>
          </form>
          <button className="session-delete website-create"
            onClick={this.deleteWebsiteFunc}
            >DELETE WEBSITE</button>
        </div>
      );
    }
}

export default withRouter(WebsiteUpdateForm);
