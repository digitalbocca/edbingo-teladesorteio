<template>
  <div id="app" class="edb-altura-min">
    <!--MODAL TABELA-->
    <div class="modal fade" id="modalTabela" tabindex="-1" role="dialog" aria-labelledby="modalTabela" aria-hidden="true">
      <div class="modal-dialog modal-giga">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">NÚMEROS SORTEADOS</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <tabela></tabela>
          </div>
          <div class="modal-footer">
            <button @click="abreModal('modalTabela')" type="button" class="btn btn-primary">FECHAR</button>
          </div>
        </div>
      </div>
    </div>
    <!--MODAL INFO-->
    <div class="modal fade" id="modalInfo" tabindex="-1" role="dialog" aria-labelledby="modalTabela" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">SOBRE</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col text-center">
                <h1>EDBingo</h1>
                <p>Somente Exibição (Não Faz Sorteio)</p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h3 class="text-center">SOBRE</h3>
                <ul>
                  <li>Apenas para uso didático</li>
                  <li>Vue 2</li>
                  <li>Bootstrap 4</li>
                  <li>Animate.css</li>
                  <li><a href="#">github.com</a></li>
                  <li><a href="#">http://estudiodigitalbocca.com.br/labs</a></li>
                </ul>
                <p class="text-center">&copy;2017 - Estúdio Digital Bocca</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button @click="abreModal('modalInfo')" type="button" class="btn btn-primary">FECHAR</button>
          </div>
        </div>
      </div>
    </div>
    <div class="edb-altura-min container-fluid d-flex flex-column justify-content-between">
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col">
              <h1 id="logo" @click="animaLogo()">EDBingo</h1>
            </div>
            <div class="col d-flex justify-content-end align-items-center">
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
            <h1 class="edb-h1">{{numeroAdicionado}}</h1>
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

import Tabela from './components/Tabela'

export default {
  name: 'app',
  components: {
    Tabela
  },
  computed: {
    numero: function() {
      return //this.numeroAdicionado
    }
  },
  data() {
    return {
      numeroAdicionado: 0
    }
  },
  methods: {
    anime: function() {
      var vm = this
      $('#bola')
        .addClass('animated rollOut')
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
          function(){
            $('#bola').addClass('rollIn').removeClass('rollOut')
        })
      setTimeout(vm.addUm,1000)
    },
    animaLogo: function() {
      $('#logo').animateCss('shake')
    },
    addUm: function() {
      this.numeroAdicionado++
    },
    abreModal: function(id){
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
</style>
