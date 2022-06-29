import React, { Component } from 'react';
import './index.scss'

class MiddleBackground extends Component {
  state = {}
  render() {
    return (
      <div className="middle_background">
        <div className="bg" style={{ backgroundImage: `url(${this.props.bgPath})` }}></div>
      </div>
    );
  }
}

export default MiddleBackground;