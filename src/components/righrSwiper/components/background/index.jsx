import React, { Component } from 'react';

import './index.scss'

class RightSwiperBG extends Component {
  state = {}
  render() {
    return (
      <div className="bg">
        <div className="mask"></div>
        {this.props.children}
      </div>
    );
  }
}

export default RightSwiperBG;