import { throttle } from 'lodash'

function resizeFunc() {
  let html = document.querySelector('html')
  // 高度
  const newHeightFontSize = ((html.clientHeight / 930) * 45).toFixed(2)
  const newWidthFontSize = ((html.clientWidth / 1920) * 75).toFixed(2)
  const result = html.clientWidth > 992 ? newHeightFontSize : newWidthFontSize

  document.querySelector('html').setAttribute('style', 'font-size:' + result + 'px')
}

const mixins = () => {
  resizeFunc()
  window.addEventListener('resize', throttle(resizeFunc, 500))
}

export default mixins
