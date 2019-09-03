import React from 'react'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
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
            <form>
              <label>Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleInput('username')}
              />
              </label>
    
              <label>Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
              />
                <button onClick={this.handleSubmit}>{this.props.formtype}</button>
              </label>
            </form>
          </div>
        );
    }
}
export default SessionForm;