import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

window.vm = new Vue({
  render: h => h(App),
  created () {
    require('animate.css/animate.min.css')
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
