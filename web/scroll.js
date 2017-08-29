var evenScroll = function (document, distance, time) {

  var startScrollTop = document.scrollTop // 滚动条起始位置
  var TIME = time === '' || time === undefined ? 300 : time // 滚动持续的时间
  var startTime = new Date() // 开始滚动的时间

  let doScroll = function () {
    setTimeout(function () {
      let dTime = new Date() - startTime // 当前时间
      if (dTime < TIME) { // 判断时间间隔是否小于设置的时间
        document.scrollTop = startScrollTop + distance * dTime / TIME // 计算当前时间差需要滚动到的高度
        doScroll()
      } else {
        document.scrollTop = startScrollTop + distance // 将滚动条置于最终的位置
      }
    }, 1)
  }
  doScroll()
}


/* export */
if (typeof module != "undefined" && module !== null && module.exports) {
  module.exports = {
    evenScroll
  }
} else if (typeof define === "function" && define.amd) {
  define(function () {
    return {
      evenScroll
    }
  })
}
