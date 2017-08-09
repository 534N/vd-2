import React from 'react';
import classnames from 'classnames';

const sideBarRoutes = [
  { 
    path: '/',
    exact: true,
    sidebar: (active) =>
      <div className={classnames('side-nav', 'flex-center-column', active)}>
        <i className='zmdi zmdi-solink-s' />
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
    path: '/cameras',
    sidebar: (active) =>
      <div className={classnames('side-nav', 'flex-center-column', active)}>
        <i className='zmdi zmdi-videocam' />
        <text>CAMERAS</text>
      </div>,
    main: () => <h2>Cameras</h2>
  },
  { 
    path: '/dashboard',
    sidebar: (active) =>
      <div className={classnames('side-nav', 'flex-center-column', active)}>
        <i className='zmdi zmdi-stats-bars' />
        <text>DASHBOARD</text>
      </div>,
    main: () => <h2>Dashboard</h2>
  },
  { 
    path: '/settings',
    sidebar: (active) =>
      <div className={classnames('side-nav', 'flex-center-column', active)}>
        <i className='zmdi zmdi-settings' />
        <text>SETTINGS</text>
      </div>,
    main: () => <h2>Settings</h2>
  }
];

export default sideBarRoutes;