
/**
 * 在组件 methods 中添加如下名字的函数以进行 resize 触发
 *
 * $resizeF1 <=768px 触发的函数
 *
 * $resizeF2 > 768px && <= 992px 触发的函数
 *
 * $resizeF3 > 992px && <= 1200px  触发的函数
 *
 * $resizeF4 > 1200px && <= 1920px  触发的函数
 *
 * $resizeF5 > 1920px 触发的函数
 */
const mixins = {
  mounted() {
    this.$nextTick(() => {
      const checkResize = () => {
        const w = window.innerWidth
        if (w > 1920) { this.$resizeF5 && this.$resizeF5() }
        else if (w <= 1920 && w > 1200) { this.$resizeF4 && this.$resizeF4() }
        else if (w <= 1200 && w > 992) { this.$resizeF3 && this.$resizeF3() }
        else if (w <= 992 && w > 768) { this.$resizeF2 && this.$resizeF2() }
        else { this.$resizeF1 && this.$resizeF1() }
      }

      checkResize()
      window.addEventListener('resize', checkResize)
    })
  }
}

export default mixins

