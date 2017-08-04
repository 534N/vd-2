// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import './styles/Dashboard.css';

export default class extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('dashboard', className)} {...props}>
        <h1>
          DASHBOARD
        </h1>
      </div>
    );
  }
}