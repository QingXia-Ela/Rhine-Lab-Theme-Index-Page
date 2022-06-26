import React, { Component } from 'react';
import './index.scss'

class MainText extends Component {

  render() {
    return (
      <div className="main_text">
        {this.props.children}
      </div>
    );
  }
}

export default MainText;