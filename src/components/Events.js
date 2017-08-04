// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import './styles/Events.css';

export default class extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('events', className)} {...props}>
        <h1>
          EVENTS
        </h1>
      </div>
    );
  }
}