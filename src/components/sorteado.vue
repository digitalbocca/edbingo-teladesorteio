<template lang="pug">

.sorteado(:class="cssClass" @click="increment()")
  h1() {{ number }}

</template>

<script>

import { ref, onMounted } from 'vue'

export default {
  name: 'Sorteado',
  setup () {
    onMounted (() => {
      console.log('Componente Sorteado')
    })

    const cssClass = ref('slide-in-blurred-left')
    const number = ref(1)

    const increment = () => {
      cssClass.value = 'puff-out-center'

      setTimeout(() => {
        number.value = number.value + 1
      }, 1000)

      setTimeout(() => {
        cssClass.value = 'slide-in-blurred-left'
      }, 1000)
    }

    return {
      cssClass,
      number,
      increment
    }
  }
}

</script>

<style lang="sass">

  .sorteado
    background-color: #f1f1f1

    display: flex
    align-items: center
    justify-content: center

    border: thin #f1f1f1
    border-radius: 50%

    width: 16rem
    min-width: 16rem
    max-width: 16rem

    height: 16rem
    min-height: 16rem
    max-height: 16rem
    
    cursor: pointer
  
  .sorteado h1
    display: inline-block

    font-size: 10rem
    text-align: center

</style>