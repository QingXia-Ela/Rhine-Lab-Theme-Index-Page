import React, { Component } from 'react';
import './index.scss'

import LeftBlackBox from '../../components/leftBlackBox';

class MainPage extends Component {
  state = {

  }
  render() {
    return (
      // 使用 mobile 样式激活移动端
      <div ref={c => this.mainSwiper = c} id="mainBox" className='mobile'>
        <LeftBlackBox />
      </div>
    );
  }

  componentDidMount() {
    console.log(this.mainSwiper);
  }
}

export default MainPage;