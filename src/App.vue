<template>
  <div id="app" class="edb-altura-min">
    <modal-tabela></modal-tabela>
    <modal-info></modal-info>
    <div class="edb-altura-min container-fluid d-flex flex-column justify-content-between">
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col">
              <h1 id="logo" @click="animaLogo()">EDBingo</h1>
            </div>
            <div class="col d-flex justify-content-end align-items-center">
              <button @click="sauto()" type="button" class="btn btn-outline-secondary btn-sm">S.AUTO</button>&nbsp;
              <button @click="parar()" type="button" class="btn btn-outline-secondary btn-sm">PARAR</button>&nbsp;
              <button @click="anime()" type="button" class="btn btn-outline-secondary btn-sm">SORTEIA</button>&nbsp;
              <button @click="abreModal('modalTabela')" type="button" class="btn btn-outline-secondary btn-sm">TABELA</button>&nbsp;
              <button type="button" class="btn btn-outline-secondary btn-sm">ENCERRA</button>&nbsp;
              <button @click="abreModal('modalInfo')" type="button" class="btn btn-outline-secondary btn-sm">INFO</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col text-center d-flex justify-content-center">
          <div id="bola" class="edb-numeracao">
            <h1 class="edb-h1">{{ numeroAdicionado }}</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <p>(c)2017 - Estúdio Digital Bocca</p>
        </div>
      </div>
    </div>
  </div>
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
  computed: {
    numero () {
      return //this.numeroAdicionado
    }
  },
  data () {
    return {
      numeroAdicionado: 0,
      musica: new Audio('static/sounds/sound.mp3')
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
            vm.musica.play()
            $('#bola').addClass('zoomIn').removeClass('zoomOutLeft')
        })
      setTimeout(vm.addUm,1000)
    },
    animaLogo () {
      $('#logo').animateCss('shake')
    },
    addUm () {
      this.numeroAdicionado++
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
