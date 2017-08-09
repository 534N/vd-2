import React from 'react';
import classnames from 'classnames';

const indexRoutes = [
  { 
    path: '/',
    exact: true,
    sidebar: (active) =>
      <div className={classnames('login')}>
        <div className='button' >Login</div>
      </div>,
    main: () => <h2>Home</h2>
  },
  { 
    path: '/login',
    sidebar: (active) =>
      <div className={classnames('side-nav', 'flex-center-column', active)}>
        <i className='zmdi zmdi-grid' />
      </div>,
    main: () => <h2>login</h2>
  },
  
];

export default sideBarRoutes;