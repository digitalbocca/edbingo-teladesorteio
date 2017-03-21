import Vue from 'vue'
import App from './App'

import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

import Tether from 'tether'
window.Tether = Tether

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  created: function() {
    require('bootstrap/dist/css/bootstrap.min.css')
    require('bootstrap/dist/js/bootstrap.min')
    require('animate.css/animate.min.css')
    $.fn.extend({
      animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
          $(this).removeClass('animated ' + animationName)
        })
      }
    })
  }
})
