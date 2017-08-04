import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import Events from './components/Events';
import Cameras from './components/Cameras';
import classnames from 'classnames';


import './styles/general.css';
import './styles/index.css';
import './styles/style.css';

const routes = [
  { 
    path: '/',
    exact: true,
    sidebar: (active) =>
      <div className={classnames('side-nav', 'flex-center-column', active)}>
        <i className='zmdi zmdi-home' />
        <text>HOME</text>
      </div>,
    main: () => <h2>Home</h2>
  },
  { 
    path: '/events',
    sidebar: (active) =>
      <div className={classnames('side-nav', 'flex-center-column', active)}>
        <i className='zmdi zmdi-grid' />
        <text>EVENTS</text>
      </div>,
    main: () => <h2>Events</h2>
  },
  { 
    path: '/videos',
    sidebar: (active) =>
      <div className={classnames('side-nav', 'flex-center-column', active)}>
        <i className='zmdi zmdi-videocam' />
        <text>CAMERAS</text>
      </div>,
    main: () => <h2>Cameras</h2>
  }
];

const NavLink = ({route}) => (
  <Route path={route.path} exact={route.exact} children={({ match }) => (
    <Link to={route.path}>{route.sidebar({active: !!match})}</Link>
  )}/>
)


render((

  <BrowserRouter>
    <div className='flex-center' style={{height: '100%'}}>
      <div id='root-left' className='flex-column'>
        {
          routes.map((route, index) => {
            return <NavLink key={index} route={route} />
          })
        }
      </div>
      <div id='root-right'>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main} />
        ))}
      </div>
    </div>

    
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
