import React from 'react';
import { connect } from 'react-redux';
import { login, signup, removeErrors } from './../actions/session_actions';


class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  render() {
    return (
      <div>
        {this.props.formType}
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
