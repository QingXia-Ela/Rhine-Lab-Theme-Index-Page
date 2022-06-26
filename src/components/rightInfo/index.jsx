import React, { Component } from 'react';

import './index.scss'

class RightInfo extends Component {
  state = {}
  render() {
    return (
      <div className="right_info">
        <div className='top_title'>title</div>
        <div className='name'>Shiina's Home</div>
        <div className='bottom_uid'>uid</div>
      </div>
    );
  }
}

export default RightInfo;