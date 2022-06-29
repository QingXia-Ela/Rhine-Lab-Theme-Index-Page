import React, { Component } from 'react';
import './index.scss'

class LeftMiddleInfo extends Component {
  render() {
    return (
      <div className="left_middle_info">
        <div className="contact_box">
          <div className="title_box">
            <span>Contact With Me</span>
          </div>
          <div className="contact_link">
            <a href="https://github.com/QingXia-Ela/Rhine-Lab-Theme-Index-Page" className="iconfont icon-github"> </a>
            <a href="https://space.bilibili.com/86894342" className="iconfont icon-bilibili-line"> </a>
            <a href="https://gitee.com/shiinafan/Rhine-Lab-Theme-Index-Page" className="iconfont icon-gitee"> </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftMiddleInfo;