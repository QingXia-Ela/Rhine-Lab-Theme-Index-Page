import React, { Component } from 'react';
import swiper from 'swiper'
import 'swiper/css/swiper.min.css'

import RightSwiperBG from './components/background';
import SwiperItem from './components/swiperItem';

import './index.scss'

class RightSwiper extends Component {
  state = {
    swiperObj: null
  }
  render() {
    return (
      <div className='right_middle_container'>
        <RightSwiperBG />
        <div ref={c => this.mainSwiper = c} id='select' className="right_swiper swiper">
          <div className="swiper-wrapper">
            <SwiperItem>啊对对对对</SwiperItem>
            <SwiperItem>test</SwiperItem>
            <SwiperItem>啊对对对对</SwiperItem>
            <SwiperItem>啊对对对对</SwiperItem>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const s = new swiper(this.mainSwiper, {
      direction: 'vertical',
      slidesPerView: 3,
      observer: true,
      observeParents: true,
      mousewheel: true
    })

    this.setState({
      swiperObj: s
    })
  }
}

export default RightSwiper;