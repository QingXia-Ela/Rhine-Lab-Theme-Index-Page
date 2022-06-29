import React, { Component } from 'react';

import './index.scss'

class RightSwiperBG extends Component {
  render() {
    return (
      <div className="bg" style={{ backgroundImage: `url(${this.props.background})` }}>
        <div className="mask"></div>
        {this.props.children}
      </div>
    );
  }
}

export default RightSwiperBG;