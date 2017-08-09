import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './styles/SideBar.css';


const NavLink = ({route}) => (
  <Route path={route.path} exact={route.exact} children={({ match }) => (
    <Link to={route.path}>{route.sidebar({active: !!match})}</Link>
  )}/>
)


class SideBar extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { routes, ...props } = this.props;
    return (
      <div id='side-bar' className='flex-column'>
      {
        routes.map((route, index) => {
          return <NavLink key={index} route={route} />
        })
      }
      </div>
    );
  }
}

export default SideBar;