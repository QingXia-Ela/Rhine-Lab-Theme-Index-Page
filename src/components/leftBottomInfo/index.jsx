import React, { Component } from 'react';
import './index.scss'

class LeftBottomInfo extends Component {
  state = {}
  render() {
    return (
      <div className='left_bottom_info '>
        <span>{this.props.children}</span>
      </div>
    );
  }
}

export default LeftBottomInfo;