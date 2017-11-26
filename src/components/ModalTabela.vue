<template lang="pug">
  //- MODAL TABELA
  .modal.fade#modalTabela(tabindex="-1", role="dialog", aria-labelledby="modalTabela", aria-hidden="true")
    .modal-dialog.modal-giga
      .modal-content
        .modal-header
          h5.modal-title NÚMEROS SORTEADOS
          button.close(type="button", data-dismiss="modal", aria-label="Close")
            span(aria-hidden="true") &times;
        .modal-body
          tabela
        .modal-footer
          button.btn.btn-primary(@click="abreModal('modalTabela')", type="button") FECHAR
</template>

<script>

import Tabela from './Tabela'

export default {
  name: 'ModalTabela',
  components: {
    Tabela
  },
  methods: {
    abreModal (id) {
      $('#'+id).modal('toggle')
    }
  }
}
</script>
