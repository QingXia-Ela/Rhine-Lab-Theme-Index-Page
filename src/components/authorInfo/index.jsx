import React, { Component } from 'react';
import './index.scss'

class AuthorInfo extends Component {
  state = {}
  render() {
    return (
      <div className='author_info '>
        <span>{this.props.children}</span>
      </div>
    );
  }
}

export default AuthorInfo;