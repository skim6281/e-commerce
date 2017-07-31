import React from 'react';
import Nav from './nav';
import AuthForm from './auth_form';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const location = window.location.hash;
    if(location === "#/login") {
      return(
        <AuthForm formType="login"/>
      )
    } else if(location === "#/signup") {
      return(
        <AuthForm formType="signup"/>
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

export default App;
