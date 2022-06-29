import React, { Component } from 'react';

import './index.scss'

class SwiperItem extends Component {
  render() {
    return (
      <div className="swiper-slide">
        <a href={this.props.link ? this.props.link : '#'} className="content">
          <div className="text">
            <div className="black_dot">
              <div className="lb"></div>
              <div className="lt"></div>
              <div className="rb"></div>
              <div className="rt"></div>
            </div>
            {this.props.children}
            {/* <div className="black_underline"></div> */}
          </div>
        </a>
      </div>
    );
  }
}

export default SwiperItem;