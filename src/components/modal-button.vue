<template lang="pug">

button.btn.btn-secondary(@click="buttonAction()")
  slot
  
</template>

<script>

import { useStore } from 'vuex'

export default {
  name: 'ModalButton',
  props: {
    modalName: String
  },
  setup (props) {
    const store = useStore()

    const buttonAction = () => {
      store.dispatch('changeModalStatus', props.modalName)
    }

    return {
      buttonAction
    }
  }
}

</script>
