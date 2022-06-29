import React, { Component } from 'react';
import './index.scss'

class RightBackground extends Component {
  renderX = () => {
    let res = []
    for (let i = 0; i < 8; i++) {
      res.push(
        <div className="X_decoration" key={i}>
          <div className="dot">
            <div className="t"></div>
            <div className="l"></div>
            <div className="b"></div>
            <div className="r"></div>
          </div>
        </div>
      )
    }

    return res
  }
  render() {
    return (
      <div className="right_background">
        <div className="bg" style={{ backgroundImage: `url(${this.props.bgPath})` }}></div>
        {
          this.props.openX ? this.renderX() : null
        }
      </div>
    );
  }
}

export default RightBackground;