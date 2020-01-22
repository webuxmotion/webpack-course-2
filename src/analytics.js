import * as $ from 'jquery'

function createAnalytics() {
  let counter = 0
  let destroyed = false

  const listener = () => counter++

  //$(document).on('click', listener)
  $(document).on('click', listener)

  return {
    destroy() {
      //$(document).off('click', listener)
      $(document).off('click', listener)
      destroyed = true
    },
    getClicks() {
      if (destroyed) {
        return `Analitics is destroyed.`
      }
      return counter
    }
  }
}

window.analytics = createAnalytics()