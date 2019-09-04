import React from 'react'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {
        return (
          <div className="session-form">
            <h2>{this.props.formtype}</h2>
            <form onSubmit={this.handleSubmit} autoComplete="on">
              <label>Email:
              <input
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="session-input"
              />
              </label>

              <label>Password:
              <input type="password" 
                value={this.state.password} 
                onChange={this.update('password')} 
                className="session-input"
              />
              </label>
              <input className="session-submit" type="submit" value={this.props.formType} />
            </form>
          </div>
        );
    }
}
export default SessionForm;