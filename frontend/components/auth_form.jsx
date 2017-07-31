import React from 'react';
import { connect } from 'react-redux';
import { login, signup, removeErrors } from './../actions/session_actions';


class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    const { formType, login, signup } =this.props;
    e.preventDefault();
    const user = this.state;
    if(formType === 'login') {
      login(user);
    } else if(formType === 'signup') {
      signup(user);
    }
  }

  renderErrors() {
    return(
      <p>{this.props.errors[0]}</p>
    )
  }

  render() {
    const { formType } = this.props;
    let buttonText;
    if (formType === 'login') {
      buttonText = "Login";
    } else {
      buttonText = "Sign up";
    }
    return (
      <div>
        {formType}
        <form onSubmit={this.handleSubmit} className="auth-form">
          <input type="text"
            placeholder="Email"
            value={this.state.username}
            onChange={this.update("username")} />
          <input type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update("password")} />
          <input type="submit"
            value={formType}/>
          <div>{this.renderErrors()}</div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: state.session.currentUser,
    errors: state.session.errors
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    removeErros: () => dispatch(removeErrors()),
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
