import React from 'react'

class WebsiteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: "",
        url: "",
        description: "",
        img_url: "",
        author_id: this.props.currentUser.id,
        score_avg: 5,
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
      e.preventDefault();
      const form = Object.assign({}, this.state);
      this.props.createWebsite(form).then(ele => {this.props.history.push(`/websites/${ele.id}`)})
  };

  componentWillUnmount(){
    this.props.clearErrors()
  } 

  render() {
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
                  <label className="create-website-lables">The Image URL for your site</label>
                    <input className="create-website-input"
                      type="text" 
                      value={this.state.img_url} 
                      onChange={this.update('img_url')} 
                      // placeholder="Image URL"
                    />             
                </li>
              </ul>
              {this.renderErrors()}
            </div>
          <p>
            <input className="session-submit website-create" 
            type="submit" 
            value="Submit"
            />
          </p>
          </div>
        </form>
     </div>
    );
  }
}
export default WebsiteForm;