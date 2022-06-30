import React, { Component } from 'react';
import './index.scss'
class Loading extends Component {
  state = {}
  render() {
    return (
      <div className='loading'>
        <span>Loading...</span>
      </div>
    );
  }
}

export default Loading;