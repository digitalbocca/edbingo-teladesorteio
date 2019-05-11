<template lang="pug">
  //- MODAL INFO
  .modal.fade#modalInfo(tabindex="-1", role="dialog", aria-labelledby="modalInfo", aria-hidden="true")
    .modal-dialog.modal-md
      .modal-content
        .modal-header
          h5.modal-title SOBRE
          button.close(type="button", data-dismiss="modal", aria-label="Close")
            span(aria-hidden="true") &times;
        .modal-body
          info
        .modal-footer
          button.btn.btn-primary(@click="abreModal('modalInfo')", type="button") FECHAR
</template>

<script>

import Info from './Info'

export default {
  name: 'ModalInfo',
  components: {
    Info
  },
  methods: {
    abreModal (id) {
      $('#'+id).modal('toggle')
    }
  }
}
</script>
