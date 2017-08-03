import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

class Nav extends React.Component{
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  // Admin only links
  renderAdminLinks() {
    if(this.props.currentUser.admin) {
      return(
        <ul>
          <li><Link to="/upload">Upload</Link></li>
          <li><Link to="/users">List Users</Link></li>
          <li><Link to="/product-form">Add Product</Link></li>
        </ul>
      )
    }
  }

  logOut() {
    return this.props.logout().then(this.props.history.push('/'));
  }

  renderLinks() {
    if(this.props.currentUser) {
      return (
        <ul>
          {this.renderAdminLinks()}
          <li><Link to="/cart">Cart</Link></li>
          <li><button className="logout" onClick={this.logOut}>Logout</button></li>
        </ul>
      )
    } else {
      return (
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">SignUp</Link></li>
        </ul>
      )
    }
  }

  render() {
    return (
      <div className="nav">
        <div className="title"><Link to="/">ECommerce</Link></div>
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
