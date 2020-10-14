<template lang="pug">
.title
  h1.text-center.text-uppercase Bingo da Família
  p.text-center Toque ou clique na bola para sortear.
.menu
  modal-button(modal-name="tabela") Tabela
  modal-button(modal-name="info") Info

  //- Implementação antiga com sorteio automático.
    button.btn.btn-outline-secondary.btn-sm.mx-1.edb-cursor(type="button", @click="sauto()") S.AUTO
    button.btn.btn-outline-secondary.btn-sm.mx-1.edb-cursor(type="button", @click="parar()") PARAR 
    button.btn.btn-outline-secondary.btn-sm.mx-1.edb-cursor(type="button", @click="anime()") SORTEIA 
    button.btn.btn-outline-secondary.btn-sm.mx-1.edb-cursor(type="button", @click="abreModal('modalTabela')") TABELA 
    button.btn.btn-outline-secondary.btn-sm.mx-1.edb-cursor(type="button") ENCERRA 
    button.btn.btn-outline-secondary.btn-sm.mx-1.edb-cursor(type="button", @click="abreModal('modalInfo')") INFO 
</template>

<script>

import ModalButton from './modal-button'

export default {
  name: 'TopBar',
  components: {
    ModalButton
  }
}

</script>

<style lang="sass">

  @import ./../sass/colors

  .title, .menu
    background-color: $primary
    color: #fff
  
  .title
    padding: 1rem .6rem
  
  .menu
    display: flex
    justify-content: center
    flex-wrap: wrap

    padding: .5rem

</style>