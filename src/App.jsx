import React, { Component } from 'react';
import './App.scss'
import MainPage from './pages/mainPage';
import ChangeFontResize from './mixins/changeFontSize'

class App extends Component {
  state = {}
  render() {
    return (
      <div className='w100 h100'>
        <MainPage />
      </div>
    );
  }

  // 为什么不能在类里面用 mixins
  componentDidMount() {
    ChangeFontResize()
  }

}

export default App;