<template lang="pug">

.home
  sorteado

</template>

<script>

import Sorteado from './../components/sorteado'

export default {
  name: 'Home',
  components: {
    Sorteado
  }
}

</script>

<style lang="sass">

  .home
    flex-grow: 1

    display: flex
    flex-direction: column

    justify-content: center
    align-items: center

    padding: 2rem 1rem

</style>