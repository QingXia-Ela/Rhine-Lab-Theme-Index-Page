import React, { Component } from 'react';

import './index.scss'

class RightInfo extends Component {
  state = {}
  render() {
    return (
      <div className="right_info">
        <div className='top_title'>{this.props.title}</div>
        <div className='name'>{this.props.name}</div>
        <div className='bottom_uid'>{this.props.uid}</div>
      </div>
    );
  }
}

export default RightInfo;