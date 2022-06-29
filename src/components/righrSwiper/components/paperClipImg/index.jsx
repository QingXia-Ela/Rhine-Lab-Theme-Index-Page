import React, { Component } from 'react';
import './index.scss'

class PaperClipImg extends Component {
  judgeBG = () => {
    if (this.props.bgMode) {
      return <div className="bg_mode" style={{ backgroundImage: `url(${this.props.bgPath ? this.props.bgPath : ''})` }}></div>
    }
    else {
      return <img src="./images/rhineLogo.png" alt="" />
    }
  }
  render() {
    return (
      <div className="paperclip_img">
        <div className="img_container">
          {
            this.judgeBG()
          }
        </div>
      </div>
    );
  }
}

export default PaperClipImg;