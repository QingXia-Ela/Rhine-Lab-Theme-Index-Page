import React, { Component } from 'react';

import './index.scss'

class HeadIntro extends Component {
  state = {}
  render() {
    return (
      <div className='head_intro'>{this.props.children}</div>
    );
  }
}

export default HeadIntro;