<template lang="pug">

modal-info
modal-tabela
top-bar
home
edb-footer

</template>

<script>

import ModalTabela from './components/modal-tabela'
import ModalInfo from './components/modal-info'

import Home from './views/home'

import Modal from './components/modal'
import TopBar from './components/top-bar'
import EdbFooter from './components/edb-footer'

export default {
  name: 'app',
  components: {
    ModalTabela,
    ModalInfo,
    EdbFooter,
    Home,
    TopBar,
    Modal
  },
  data () {
    return {
      numeroAdicionado: 0,
      musica: new Audio('sounds/sound.mp3')
    }
  },
  created () {
    /*
    require('animate.css/animate.compat.css')
    window.$.fn.extend({
      animateCss (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
        this.addClass('animated ' + animationName).one(animationEnd, function () {
          window.$(this).removeClass('animated ' + animationName)
        })
      }
    })
    */
  },
  methods: {
    sauto () {
      let funcao = this.anime
      let tempo = 10 * 1000
      window.intervalo = setInterval(funcao, tempo)
    },
    parar () {
      clearInterval(window.intervalo)
    },
    anime () {
      var vm = this
      $('#bola')
        .addClass('animated zoomOutLeft')
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
          function(){
            $('#bola').addClass('zoomIn').removeClass('zoomOutLeft')
        })
      setTimeout(vm.addUm,1000)
    },
    animaLogo () {
      $('#logo').animateCss('shake')
    },
    addUm () {
      this.numeroAdicionado++
      let oNumero = this.numeroAdicionado.toString()
      console.log(oNumero)
      // responsiveVoice.speak(oNumero, 'Brazilian Portuguese Female')
    },
    abreModal (id) {
      $('#'+id).modal('toggle')
    }
  }
}
</script>
