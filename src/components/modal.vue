<template lang="pug">

.modal-wrapper(:style="status ? 'display: flex' : 'display: none'")
  .modal-content
    .modal-header
      slot(name="modal-header")
    .modal-body
      slot(name="modal-body")
    .modal-footer
      slot(name="modal-footer")
        button.btn.btn-secondary(@click="changeModalStatus()") Fechar

</template>

<script>

import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Modal',
  props: {
    modalName: String
  },
  setup (props) {
    const store = useStore()

    const modalData = {
      name: props.modalName,
      status: false
    }

    onMounted(() => {
      store.dispatch('modalRegisterProcess', modalData)
    })

    const status = computed(() => store.getters.modalRegister.filter(modal => {
      if (modal.name === props.modalName) {
        return modal.status
      }
    })[0])

    const changeModalStatus = () => store.dispatch('changeModalStatus', props.modalName)

    return {
      changeModalStatus,
      status
    }
  }
}

</script>

<style lang="sass">

  .modal-wrapper
    position: fixed
    top: 0
    left: 0

    width: 100vw
    height: 100vh

    padding: 1rem .5rem

    display: flex
    align-items: center
    justify-content: center

    background-color: rgba(0, 0, 0, .7)
    z-index: 1000

  .modal-header
    width: 100%
    border-bottom: solid thin #ccc
    padding-bottom: .8rem

  .modal-body
    width: 100%
    flex-grow: 1
    padding: 1.5rem 0
    display: flex
    flex-direction: column

  .modal-footer
    width: 100%
    border-top: solid thin #ccc
    padding-top: .8rem
    text-align: right

</style>