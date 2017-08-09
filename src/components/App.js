import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Login from './Login';
import AuthenticatedApp from './AuthenticatedApp';

import './styles/App.css';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { routes, ...props } = this.props;

    return (
      <div id='app'>
        <BrowserRouter>
          <Switch>
            <Route path='/Login' component={Login} />
            <AuthenticatedApp />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;