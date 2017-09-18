/*global require */

import React, {Component} from 'react';

require('!style-loader!css-loader!sass-loader!./App.scss');

const reactLogo = require('./react_logo.svg');

class App extends Component {
  render() {
    return <div className="app">
      <h1>Hello World!</h1>
      <img src={reactLogo}/>
    </div>;
  }
}

export default App;
