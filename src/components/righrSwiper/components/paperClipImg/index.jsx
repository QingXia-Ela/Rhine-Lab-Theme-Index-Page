import React, { Component } from 'react';
import './index.scss'

class PaperClipImg extends Component {
  state = {}
  render() {
    return (
      <div className="paperclip_img">
        <div className="img_container">
          <img src="./images/rhineLogo.png" alt="" />
        </div>
      </div>
    );
  }
}

export default PaperClipImg;