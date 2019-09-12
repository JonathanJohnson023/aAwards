import React from "react";
import { withRouter } from 'react-router-dom';

class WebsiteUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        let { currentWebsite, currentUser } = this.props;
        this.state = {
            id: currentWebsite.id,
            title: currentWebsite.title,
            url: currentWebsite.url,
            description: currentWebsite.description,
            img_url: currentWebsite.img_url,
        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.update =  this.update.bind(this)
    }

  handleSubmit(e) {
      e.preventDefault();
      // if (this.props.currentUser.email ===  "test@user.com") {
      //   window.alert("Unable to modify the demo user. Please try making a new account to test out this feature!")
      // }
      const form = Object.assign({}, this.state);
      this.props.updateWebsite(form)
        .then(payload => {
        this.props.history.push(`/websites/${payload.website.id}`)
      })
  };

  update(type) {
    return (e) => {
        this.setState({ [type]: e.target.value });
    };
  }

    handleCancel(e) {
        e.preventDefault();
        this.props.history.push(`/webiste/${this.props.currentWebsite.id}`);
    }


  render() {
    return (
      <div className="website-submission">
        <form className="website-create-form" onSubmit={this.handleSubmit}>
          <div className="create-website-header">
            <h2>Update Your Website</h2>
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

export default WebsiteUpdateForm;
