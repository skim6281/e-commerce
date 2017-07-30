import React from 'react';
import Nav from './nav';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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

export default App;
