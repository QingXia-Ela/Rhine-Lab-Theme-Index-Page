import { throttle } from 'lodash'

function resizeFunc() {
  // 高度
  const newHeightFontSize = ((window.innerHeight / 930) * 50).toFixed(2)
  const newWidthFontSize = ((window.innerWidth / 1920) * 140).toFixed(2)
  const result = window.innerWidth > 700 ? newHeightFontSize : newWidthFontSize
  document.querySelector('html').setAttribute('style', 'font-size:' + result + 'px')
}

const mixins = () => {
  resizeFunc()
  window.addEventListener('resize', throttle(resizeFunc, 500))
}

export default mixins
