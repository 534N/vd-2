// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import './styles/Settings.css';

export default class extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('settings', className)} {...props}>
        <h1>
          SETTINGS
        </h1>
      </div>
    );
  }
}