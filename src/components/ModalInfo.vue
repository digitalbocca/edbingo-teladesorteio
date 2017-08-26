<template>
  <!--MODAL INFO-->
  <div class="modal fade" id="modalInfo" tabindex="-1" role="dialog" aria-labelledby="modalTabela" aria-hidden="true">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">SOBRE</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <info></info>
        </div>
        <div class="modal-footer">
          <button @click="abreModal('modalInfo')" type="button" class="btn btn-primary">FECHAR</button>
        </div>
      </div>
    </div>
  </div>
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
