// src/components/App/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import './styles/App.css';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} >
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          APP
        </p>
      </div>
    );
  }
}

export default App;