import React, { Component } from 'react';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
          <Navigation />
          <hr/>
      </div>
    );
  }
}

export default App;