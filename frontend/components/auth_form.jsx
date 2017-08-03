import React from 'react';
import { connect } from 'react-redux';
import { login, signup, removeErrors } from './../actions/session_actions';
import { Link } from 'react-router-dom';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //remove errors when authform changes type
  // Ex: sign up form changes to login form
  componentWillReceiveProps(newProps) {
    if (newProps.formType !== this.props.formType) {
      this.props.removeErrors();
    }
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
      login(user).then(() => this.props.history.push('/'));
    } else if(formType === 'signup') {
      signup(user).then(() => this.props.history.push('/'));
    }
  }

  renderErrors() {
    return(
      <p>{this.props.errors[0]}</p>
    )
  }

  render() {
    const { formType, history, loggedIn } = this.props;
    let buttonText;
    let text;
    let linkText;
    let link;
    if(loggedIn) {
      history.push('/');
      return (<div></div>)
    }
    if (formType === 'login') {
      buttonText = "Login";
      text = "Don't have an account? ";
      linkText = "Sign Up";
      link="/signup";
    } else if(formType === 'signup'){
      buttonText = "Sign up";
      text = "Have an account? ";
      linkText = "Login"
      link="/login";
    }
    return (
      <div>
        <h1><Link to="/">E-Commerce</Link></h1>
        <form onSubmit={this.handleSubmit} className="auth-form">
          <h2>{buttonText}</h2>
          <input type="text"
            placeholder="Email"
            value={this.state.username}
            onChange={this.update("username")} />
          <input type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update("password")} />
          <input className="button"
            type="submit"
            value={buttonText}/>
          <div>{this.renderErrors()}</div>
        </form>
        <div className="auth-change">
          <p>{text}</p>
          <Link to={link}>{linkText}</Link>
        </div>
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
    removeErrors: () => dispatch(removeErrors()),
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
