import React, { Component } from 'react';
import swiper from 'swiper'
import 'swiper/css/swiper.min.css'

import RightSwiperBG from './components/background';
import SwiperItem from './components/swiperItem';
// import PaperClipImg from './components/paperClipImg';
// import PaperClipInfo from './components/paperClipInfo';

import './index.scss'

class RightSwiper extends Component {
  state = {
    swiperObj: null
  }
  render() {
    return (
      <div className='right_middle_container'>
        {/* <RightSwiperBG background={'./images/self/rightSwiper.jpg'} /> */}
        <div ref={c => this.mainSwiper = c} id='select' className="right_swiper swiper">
          <div className="swiper-wrapper">
            {
              this.props.data.map((val, i) => {
                return <SwiperItem link={val.link} key={i}>{val.title}</SwiperItem>
              })
            }
          </div>
        </div>
        {/* <PaperClipImg bgMode={false} bgPath={'./images/rhineLogo.png'} /> */}
        {/* <PaperClipInfo /> */}
      </div>
    );
  }

  componentDidMount() {
    const s = new swiper(this.mainSwiper, {
      direction: 'vertical',
      slidesPerView: 3,
      observer: true,
      observeParents: true,
      mousewheel: true,
      breakpoints: {
        0: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 3,
        }
      },
      on: {
        resize() {
          setTimeout(() => {
            this.update()
          }, 500)
        }
      }
    })

    this.setState({
      swiperObj: s
    })
  }
}

export default RightSwiper;