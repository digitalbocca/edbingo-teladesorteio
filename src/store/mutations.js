'use strict'

export default {
  MODAL_STATUS (state, newModalStatus) {
    state.modalRegister = newModalStatus
  },
  MODAL_REGISTER (state, data) {
    state.modalRegister.push(data)
  }
}
