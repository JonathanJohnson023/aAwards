import React from "react";
import { withRouter } from 'react-router-dom';

class WebsiteUpdateForm extends React.Component {
    constructor(props) {
        super(props);

        let { website } = this.props;
        this.state = {
            title: website.title,
            url: website.url,
            description: website.description,
            img_url: website.img_url,
            photoFile: null
        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.update =  this.update.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.currentUser.email ===  "test@user.com") {
            window.alert("Unable to modify the demo user. Please try making a new account to test out this feature!")
        } else {
            const formData = new FormData();
            formData.append('website[id]', this.props.website.id)
            formData.append('website[title]', this.state.title);
            formData.append('website[url]', this.state.url);
            formData.append('website[description]', this.state.description)
            if (this.state.photoFile) {
                formData.append('website[photo]', this.state.photoFile);
            }
            this.props.updateWebsite(formData, this.props.userId )
                .then((result) => {
                    this.props.history.push(`/website/${result.website.id}`)
                })
        }
    }
  handleSubmit(e) {
      e.preventDefault();
      const form = Object.assign({}, this.state);
      this.props.createWebsite(form).then(ele => {
        this.props.history.push(`/websites/${ele.website.id}`)
      })
  };

  update(type) {
    return (e) => {
        this.setState({ [type]: e.target.value });
    };
  }

    handleCancel(e) {
        e.preventDefault();
        let path = `/users/${this.props.website.id}`;
        this.props.history.push(path);
    }


    render() {

        let postPreview = 
            <div className="preview-div update-preview">
                <div className="update-left-top">
                    Profile Picture
                </div>
                <div className="profile-pic-main">
                    <img
                        className="post-pic-preview"
                        src={this.state.img_url}
                    />
                </div>
            </div>



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
        //     <div>
        //     <div className="post-form-container">
        //         <ul className="login-errors">
        //             {/* {this.errors()} */}
        //         </ul>

        //         <form className="post-form" onSubmit={this.handleSubmit}>
        //             <div className="upload-form-div">
        //                 {postPreview}
        //             </div>
        //             <div className="update-form-right">
        //                 <div className="update-right-top">
        //                     <div>
        //                         {this.props.website.url}
        //                     </div>
        //                 </div>
        //                 <div className="update-right-mid">
        //                     <div className="update-profile-pic">
        //                     <label
        //                         className='upload-photo'
        //                         htmlFor="file-selector">
        //                         <div className="update-profile-text">
        //                             Update Profile Picture:
        //                         </div>
        //                             <input
        //                                 className="photo-input-field int"
        //                                 id="file-selector"
        //                                 type="file"
        //                                 onChange={this.handleFile}
        //                             />
        //                     </label>
        //                     </div>
        //                     <label className='update-description'>
        //                         <div className="update-profile-text">
        //                             Update Email:
        //                         </div>
        //                         <input
        //                             type="text"
        //                             className="update-text-input int"
        //                             // value={this.state.description}
        //                             placeholder={this.state.description}
        //                             onChange={this.update('description')}
        //                         />
        //                         </label>
        //                         <label className="update-url">
        //                         <div className="update-profile-text">
        //                                 Update Username:
        //                         </div>
        //                         <input
        //                             type="text"
        //                             className="update-text-input int"
        //                             placeholder={this.state.url}
        //                             // placeholder="Write a caption..."
        //                             onChange={this.update('url')}
        //                         />
        //                     </label>
        //                     <label className='update-title'>
        //                         <div className="update-profile-text">
        //                             Update Bio:
        //                         </div>
        //                         <textarea
        //                             type="text"
        //                             className="update-title-text int"
        //                             // value={this.state.title}
        //                             placeholder={this.state.title}
        //                             onChange={this.update('title')}
        //                         >
        //                         </textarea>
        //                     </label>
        //                 </div>
        //                 <div className="update-right-bottom">
        //                     <div className="post-form-buttons">
        //                         <button
        //                             className="post-button-cancel update-cancel"
        //                             onClick={this.handleCancel}>
        //                             Cancel
        //                         </button>
        //                         {/* <input
        //                             className="post-button-upload update-submit"
        //                             type="submit"
        //                             value="Update Profile"
        //                         /> */}
        //                         <button
        //                             className="post-button-upload update-submit"
        //                             type="submit">
        //                             Update Profile
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </form>
        //     </div>
        //     </div>
    }
}

export default WebsiteUpdateForm;
