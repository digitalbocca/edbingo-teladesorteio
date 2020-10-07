'use strict'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.productionTip = false

/*
window.vm = new Vue({
  render: h => h(App),
  created () {
    require('animate.css/animate.compat.css')
    window.$.fn.extend({
      animateCss (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
        this.addClass('animated ' + animationName).one(animationEnd, function () {
          window.$(this).removeClass('animated ' + animationName)
        })
      }
    })
  }
}).$mount('#app')

*/

app.mount('#app')
