import React, { Component } from 'react';
import './index.scss'

import LeftBlackBox from '../../components/leftBlackBox';
import RightInfo from '../../components/rightInfo';
import AuthorInfo from '../../components/authorInfo';
import LeftTopInfo from '../../components/leftTopInfo';
import LeftBottomInfo from '../../components/leftBottomInfo';
import LeftMiddleInfo from '../../components/leftMiddleInfo';
import RightSwiper from '../../components/righrSwiper';
import LeftBackground from '../../components/leftBackground';
import RightBackground from '../../components/rightBackground';
import MiddleBackground from '../../components/middleBackground';

class MainPage extends Component {
  state = {
    swiperData: [
      { title: '首页', link: '#' },
      { title: '博客', link: '/blog' }
    ],
    style: 'mobile unactive'
  }
  render() {
    return (
      // 使用 mobile 样式激活移动端
      <div ref={c => this.mainSwiper = c} id="mainBox" className={this.state.style}>
        {/* <LeftBlackBox /> */}
        <RightInfo title={''} name={"shiina's home"} uid={'这里是 Shiina 的小网站'} />
        <AuthorInfo>powered by<strong>&nbsp;React</strong> | theme by <a style={{ textDecoration: 'underline' }} href="https://github.com/QingXia-Ela">QingXia_Ela</a></AuthorInfo>
        <LeftTopInfo />
        <LeftBottomInfo>Copyright © {new Date().getFullYear()} - present Shiina's index</LeftBottomInfo>
        <LeftMiddleInfo />
        <RightSwiper data={this.state.swiperData} />
        {/* <LeftBackground bgPath={'./images/self/leftBg.jpg'} /> */}
        {/* <RightBackground openX={false} bgPath={'./images/self/rightBg.jpg'} /> */}
        <MiddleBackground bgPath={'./images/self/middleBg.webp'}></MiddleBackground>
      </div>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        style: 'mobile'
      })
    }, 1500);

    setTimeout(() => {
      this.setState({
        style: 'mobile startProcess'
      })
    }, 2800)
  }
}

export default MainPage;