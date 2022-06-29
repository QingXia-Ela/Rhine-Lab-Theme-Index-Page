import React, { Component } from 'react';
import './index.scss'

import HeadIntro from './components/headIntro';
import MainText from './components/mainText';

import Tip from './components/mainText/components/tip';

class LeftBlackBox extends Component {
  state = {}
  render() {
    return (
      // 加载中样式 left_black_box_unactive
      <div className='left_black_box'>
        <div className="core_box">
          <HeadIntro>section</HeadIntro>
          <MainText>
            <span>HELLO</span>
            <span>WORLD</span>
            <Tip>DAMEDANE DAMEYO DAMEDANOYO</Tip>
          </MainText>
        </div>
      </div>
    );
  }
}

export default LeftBlackBox;