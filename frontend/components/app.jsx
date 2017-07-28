import React from 'react';
import Nav from './nav';

const App = () => {
  return (
    <main>
      <Nav/>
      <content className="content">
        {this.props.children}
      </content>
    </main>
  )
}
