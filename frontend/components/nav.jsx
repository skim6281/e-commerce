import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

class Nav extends React.Component{
  constructor(props) {
    super(props);
  }

  renderAdminLinks() {
    if(this.props.currentUser.admin) {
      return(
        <Link to="/upload">Upload</Link>
      )
    }
  }

  renderLinks() {
    if(this.props.currentUser) {
      return (
        <div>
          <Link to="/cart">Cart</Link>
          <button onClick={this.props.logout}>Logout</button>
          {this.renderAdminLinks()}
        </div>
      )
    } else {
      return (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        NavBar
        {this.renderLinks()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return({
    logout: () => dispatch(logout())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
