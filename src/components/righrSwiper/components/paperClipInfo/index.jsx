import React, { Component } from 'react';
import './index.scss'

class PaperClipInfo extends Component {
  state = {}
  render() {
    return (
      <div className="paper_clip_info">
        <div className="company_position"><span>director</span></div>
        <div className="container">
          <div className="name"> dorothy frank</div>
          <div className="icon_tip">
            <p>personal information</p>
            <p>not fake data</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PaperClipInfo;