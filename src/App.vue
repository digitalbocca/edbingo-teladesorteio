<template lang="pug">
  .edb-altura-min#app
    modal-tabela
    modal-info
    .edb-altura-min.container-fluid.d-flex.flex-column.justify-content-between
      .row
        .col
          .row
            .col
              h1#logo(@click="animaLogo()") EDBingo
            .col.d-flex.justify-content-end.align-items-center
              button.btn.btn-outline-secondary.btn-sm.mx-1.edb-cursor(type="button", @click="sauto()") S.AUTO
              button.btn.btn-outline-secondary.btn-sm.mx-1.edb-cursor(type="button", @click="parar()") PARAR 
              button.btn.btn-outline-secondary.btn-sm.mx-1.edb-cursor(type="button", @click="anime()") SORTEIA 
              button.btn.btn-outline-secondary.btn-sm.mx-1.edb-cursor(type="button", @click="abreModal('modalTabela')") TABELA 
              button.btn.btn-outline-secondary.btn-sm.mx-1.edb-cursor(type="button") ENCERRA 
              button.btn.btn-outline-secondary.btn-sm.mx-1.edb-cursor(type="button", @click="abreModal('modalInfo')") INFO 
      .row
        .col.text-center.d-flex.justify-content-center
          .edb-numeracao#bola
            h1.edb-h1 {{ numeroAdicionado }}
      .row
        .col.text-center
          p &copy;2017-2018 Estúdio Digital Bocca
</template>

<script>

import ModalTabela from './components/ModalTabela'
import ModalInfo from './components/ModalInfo'

export default {
  name: 'app',
  components: {
    ModalTabela,
    ModalInfo
  },
  data () {
    return {
      numeroAdicionado: 0,
      musica: new Audio('/sounds/sound.mp3')
    }
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
      responsiveVoice.speak(oNumero, 'Brazilian Portuguese Female')
    },
    abreModal (id) {
      $('#'+id).modal('toggle')
    }
  }
}
</script>

<style lang="sass">
  html
    height: 100%
  
  body
    height: 100%
    min-height: 100%
  
  .edb-altura-min
    height: 100%
    min-height: 100%
  
  .edb-cursor
    cursor: pointer
  
  .edb-menu
    color: #ccc
  
  .edb-menu:hover
    color: #000
    cursor: pointer
  
  .edb-numeracao
    font-size: 16rem
    border: thin #f1f1f1
    border-radius: 50%
    background-color: #f1f1f1
    min-width: 20rem
    min-height: 20rem
  
  .edb-h1
    font-size: 16rem
  
  #logo:hover
    cursor: pointer
  
  .modal-giga
    width: 90% !important
    max-width: 90% !important
  
  #tocador
    display: none

</style>
