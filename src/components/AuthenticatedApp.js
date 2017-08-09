import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import sideBarRoutes from '../routes/sideBarRoutes';

import ContentPanel from './ContentPanel'
import Events from './Events';
import Cameras from './Cameras';
import SideBar from './SideBar';

import './styles/AuthenticatedApp.css';

class AuthenticatedApp extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { routes, ...props } = this.props;

    return (
      <div id='authenticated-app'>
        <BrowserRouter>
          <div className='flex-center' style={{height: '100%'}}>
            <SideBar routes={sideBarRoutes} />
            <div id='root-right' className='flex-column'>
              <div id='root-right-top-panel'></div>
              <ContentPanel routes={sideBarRoutes} />
              <div id='root-right-bottom-panel'></div>
            </div>
            
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default AuthenticatedApp;