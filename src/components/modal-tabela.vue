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

<modal modal-name="tabela">
  <template #modal-header>
    <h1>EDBingo - Tabela dos Números</h1>
    <p>Somente Exibição (Não Faz Sorteio)</p>
  </template>
  <template #modal-body>
    <div class="modal-content flex-grow">
      <table class="exibicao">
        <tbody>
          <tr>
            <td>B</td>
            <td v-for="b in 15" :key="b">{{ b }}</td>
          </tr>
          <tr>
            <td>I</td>
            <td v-for="i in 15" :key="i">{{ i + 15 }}</td>
          </tr>
          <tr>
            <td>N</td>
            <td v-for="n in 15" :key="n">{{ n + 30 }}</td>
          </tr>
          <tr>
            <td>G</td>
            <td v-for="g in 15" :key="g">{{ g + 45 }}</td>
          </tr>
          <tr>
            <td>O</td>
            <td v-for="o in 15" :key="o">{{ o + 60 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
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

<style lang="sass" scoped>

  @import ./../sass/colors

  .exibicao tbody
    display: table
    margin: auto

  .exibicao tr
    display: flex
    // min-height: 3rem

  .exibicao td
    padding: .2rem
    margin: .2rem

    background-color: $grey-dark
    color: #fff

    border-radius: 50%

    min-width: 3rem
    min-height: 3rem

    display: flex
    align-items: center
    justify-content: center

</style>
