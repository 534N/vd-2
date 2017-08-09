import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';

import './styles/ContentPanel.css';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

class ContentPanel extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { routes, ...props } = this.props;

    return (
      <div id='content-panel'>
        {
          routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <PrivateRoute
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main} />
          ))
        }
      </div>
    );
  }
}

export default ContentPanel;