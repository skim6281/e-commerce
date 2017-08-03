import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/user_actions';

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return (
        <div key={user.id}>
          {user.username}
        </div>
      );
    });
  }

  render() {
    if(this.props.currentUser.admin) {
      return(
        <div className="below-nav">
          {this.renderUsers()}
        </div>
      )
    } else {
      return (<div className="below-nav">Unauthorized</div>)
    }
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
