import React, { Component } from 'react';

import './index.scss'

class LeftBackground extends Component {
  judgeBG = () => {
    if (this.props.bgPath) {
      return <div className="left_background" key={0} style={{ backgroundImage: `url(${this.props.bgPath})` }}></div>
    }
    else {
      return <div className="left_background" key={0} style={{ backgroundImage: 'url(./images/rhineLab.png)' }}></div>
    }
  }
  render() {
    return (
      <div>
        {this.judgeBG()}
      </div>
    );
  }
}

export default LeftBackground;