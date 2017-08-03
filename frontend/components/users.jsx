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
    return(
      <div className="below-nav">
        {this.renderUsers()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
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

//createProduct: (product) => dispatch(createProduct(product))
