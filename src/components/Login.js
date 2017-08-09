// src/components/About/index.js
import React, { Component } from 'react'

import Auth0Lock from 'auth0-lock'
import classnames from 'classnames'
import settings from '../utils/settings'
import { login } from '../actions'

import './styles/Login.css'

export default class extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  constructor(props) {
    super(props)
    
    let logo = process.env.PUBLIC_URL + '/solink.png';
    const sso = window.location.hostname === 'solink.g1net.com';

    this.lock = new Auth0Lock(
      settings.auth0_clientID,
      settings.auth0_domain,
      {
        allowSignUp: false,
        container: 'login',
        theme: {
          logo: logo,//'https://solinkcloud.com/assets/d93cde7b506b1fe81bdfb93f38981dd5.png',
          primaryColor: '#ffa000'//ThemeColor['orange-1']
        },
        auth: {
          redirect: false,
          responseType: 'token',
          params: {
            scope: 'openid app_metadata email user_metadata created_at roles tenantId userType eventTypes offline_access given_name family_name',
            device: 'VD Web'
          },
          sso: sso,
        }
      }
    );

    this.lock.on('authenticated', function(authResult) {
      if (authResult && authResult.refreshToken) {

        dispatch(login(authResult));
      }
    });
  }

  componentDidMount() {
    setTimeout(() => {this.lock.show();}, 0)
  }


  render() {
    const { className, ...props } = this.props;
    return (
      <div id='login' className='flex-center'>
      </div>
    );
  }
}