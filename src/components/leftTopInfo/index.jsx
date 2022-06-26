import { Row, Col } from 'antd';
import React, { Component } from 'react';
import './index.scss'


class LeftTopInfo extends Component {


  render() {
    return (
      <Row className='left_top_info'>
        <Col xs={12} sm={12} md={12} lg={24} xl={24} xxl={24} className='name'><span>rhine</span> <span>lab</span></Col>
        <Col xs={0} sm={0} md={0} lg={24} xl={24} xxl={24} className="info"><span>synthesize</span> <span>information</span></Col>
        <Col xs={12} sm={12} md={12} lg={24} xl={24} xxl={24} className="os"><span className='f1'>analysis</span> <strong className='f4'>os</strong></Col>
      </Row >
    );
  }
}

export default LeftTopInfo;