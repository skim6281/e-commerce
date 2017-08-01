import React from 'react';
import Nav from './nav';
import AuthForm from './auth_form';
import { withRouter } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.history);
  }

  render() {
    const { history } = this.props;
    const location = window.location.hash;
    if(location === "#/login") {
      return(
        <AuthForm history={history} formType="login"/>
      )
    } else if(location === "#/signup") {
      return(
        <AuthForm history={history} formType="signup"/>
      )
    } else {
      return (
        <main>
          <Nav/>
          <content className="content">
            {this.props.children}
          </content>
        </main>
      )
    }
  }
}

export default withRouter(App);
