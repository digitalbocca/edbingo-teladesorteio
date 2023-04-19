<template lang="html">

<!--

  Sintaxe HTML

  <modal>
    <template #modal-header>
      <h1>Aqui é o título</h1>
    </template>
  </modal>

  ** Não funciona com PUG (13/10/2020) **

  Sintaxe PUG

  template(v-slot:modal-header="")
  template(#modal-header="")

  Erro:
  @parcel/transformer-vue: Invalid end tag.

-->

<modal modal-name="info">
  <template #modal-header>
    <h1>EDBingo</h1>
    <p>Somente Exibição (Não Faz Sorteio)</p>
  </template>
  <template #modal-body>
    <h3 class="text-center modal-content-title">SOBRE</h3>
    <div class="modal-content flex-grow">
      <ul class="">
        <li>Vue 3+</li>
        <li>Vuex 4+</li>
        <li>Apenas para uso didático</li>
        <li>
          <a href="https://github.com/digitalbocca/edbingo-teladesorteio">
            https://github.com/digitalbocca/edbingo-teladesorteio
          </a>
        </li>
        <li>
          <a href="https://digitalbocca.github.io/edbingo-teladesorteio">
            https://digitalbocca.github.io/edbingo-teladesorteio
          </a>
        </li>
      </ul>
    </div>
    <p class="text-center modal-content-footer">
      &copy;2017-2023 Estúdio Digital Bocca
    </p>
  </template>
</modal>

</template>

<script>

import Modal from './modal'

export default {
  name: 'ModalInfo',
  components: {
    Modal
  }
}
</script>

<style lang="sass">

</style>
