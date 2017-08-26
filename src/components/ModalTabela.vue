<template>
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
