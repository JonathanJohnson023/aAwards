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
        this.handleFile = this.handleFile.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.update =  this.update.bind(this)
    }


    handleFile(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ img_url: reader.result, photoFile: file });

        if (file) {
            reader.readAsDataURL(file);
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        if (this.props.currentUser.email ===  "test@user.com") {
            window.alert("Unable to modify the demo user. Please try making a new account to test out this feature!")
        } else {
            const formData = new FormData();
            formData.append('user[id]', this.props.website.id)
            formData.append('user[title]', this.state.title);
            formData.append('user[url]', this.state.url);
            formData.append('user[description]', this.state.description)
            if (this.state.photoFile) {
                formData.append('user[photo]', this.state.photoFile);
            }
            this.props.updateUser(formData, this.props.userId )
                .then((result) => {
                    this.props.history.push(`/users/${result.user.id}`)
                })
        }
    }


    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
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
            <div>
                <NavBarContainer />
            <div className="post-form-container">
                <ul className="login-errors">
                    {/* {this.errors()} */}
                </ul>

                <form className="post-form" onSubmit={this.handleSubmit}>
                    <div className="upload-form-div">
                        {postPreview}
                    </div>
                    <div className="update-form-right">
                        <div className="update-right-top">
                            <div>
                                {this.props.website.url}
                            </div>
                        </div>
                        <div className="update-right-mid">
                            <div className="update-profile-pic">
                            <label
                                className='upload-photo'
                                htmlFor="file-selector">
                                <div className="update-profile-text">
                                    Update Profile Picture:
                                </div>
                                    <input
                                        className="photo-input-field int"
                                        id="file-selector"
                                        type="file"
                                        onChange={this.handleFile}
                                    />
                            </label>
                            </div>
                            <label className='update-description'>
                                <div className="update-profile-text">
                                    Update Email:
                                </div>
                                <input
                                    type="text"
                                    className="update-text-input int"
                                    // value={this.state.description}
                                    placeholder={this.state.description}
                                    onChange={this.update('description')}
                                />
                                </label>
                                <label className="update-url">
                                <div className="update-profile-text">
                                        Update Username:
                                </div>
                                <input
                                    type="text"
                                    className="update-text-input int"
                                    placeholder={this.state.url}
                                    // placeholder="Write a caption..."
                                    onChange={this.update('url')}
                                />
                            </label>
                            <label className='update-title'>
                                <div className="update-profile-text">
                                    Update Bio:
                                </div>
                                <textarea
                                    type="text"
                                    className="update-title-text int"
                                    // value={this.state.title}
                                    placeholder={this.state.title}
                                    onChange={this.update('title')}
                                >
                                </textarea>
                            </label>
                        </div>
                        <div className="update-right-bottom">
                            <div className="post-form-buttons">
                                <button
                                    className="post-button-cancel update-cancel"
                                    onClick={this.handleCancel}>
                                    Cancel
                                </button>
                                {/* <input
                                    className="post-button-upload update-submit"
                                    type="submit"
                                    value="Update Profile"
                                /> */}
                                <button
                                    className="post-button-upload update-submit"
                                    type="submit">
                                    Update Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

export default WebsiteUpdateForm;
