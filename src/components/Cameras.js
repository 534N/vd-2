// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import './styles/Cameras.css';

export default class extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('videos', className)} >
        <h1>
          VIDEOS
        </h1>
      </div>
    );
  }
}