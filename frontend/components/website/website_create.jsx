import React from 'react'

class WebsiteForm extends React.Component {
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
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileCover = this.handleFileCover.bind(this);
    this.handleFileThumbnail = this.handleFileThumbnail.bind(this);
    this.handleFileScreenshots = this.handleFileScreenshots.bind(this);
  }

  renderErrors() {
    return(
      <ul className="errors-ul">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  update(type) {
      return (e) => {
          this.setState({ [type]: e.target.value });
      };
  }

  
  handleFileCover(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({cover: file, coverUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  };
  
  handleFileThumbnail(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({thumbnail: file, thumbnailUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  };
  
  handleFileScreenshots(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({screenshots: file, screenshotsUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  };
  
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
      this.props.createWebsite(formData).then(ele => {
        this.props.history.push(`/websites/${ele.website.id}`)
      })
  };

  componentWillUnmount(){
    this.props.clearErrors()
  } 

  // componentDidUpdate(prevProps){
  //   this.setState(this.props.errors)
  // }

  render() {

    const previewCover = this.state.coverUrl ? <img className='image-preview-cover' src={this.state.coverUrl} /> : <img className='image-preview-cover' />;

    return (
      <div className="website-submission">
        <form className="website-create-form" onSubmit={this.handleSubmit}>
          <div className="create-website-header">
            <h2>Website Submission</h2>
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
                <li className="create-website-lis">
                  <label className="create-website-file-lables">This Image will be displayed as your Banner</label>
                    <input className="create-website-files"
                      type="file" 
                      onChange={this.handleFileCover} 
                      // placeholder="Image URL"
                    />                       
                </li>
                <li className="create-website-lis">
                  <label className="create-website-file-lables">This Image will be your websites thumbnail</label>
                    <input className="create-website-files"
                      type="file" 
                      onChange={this.handleFileThumbnail} 
                      // placeholder="Image URL"
                    /> 
                </li>
                {/* <li className="create-website-lis">
                  <label className="create-website-lables">The Image URL for your site</label>
                    <input className="create-website-files"
                      type="file" 
                      onChange={this.handleFileScreenshots} 
                      // placeholder="Image URL"
                    />             
                </li> */}
              </ul>
              {this.renderErrors()}
            </div>
          <p>
            <input className="session-submit website-create" 
            type="submit" 
            value="Submit"
            />
          </p>
          {/* <div className='image-preview-cover'>
              <div className='image-cover'>{previewCover}</div>
          </div>   */}
          </div>
        </form>
     </div>
    );
  }
}
export default WebsiteForm;