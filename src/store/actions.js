'use strict'

export default {
  changeModalStatus (context, name) {
    const newModalStatus = context.state.modalRegister.map(modal => {
      if (modal.name === name) {
        return {
          name: modal.name,
          status: !modal.status
        }
      } else {
        return modal
      }
    })
    context.commit('MODAL_STATUS', newModalStatus)
  },
  modalRegisterProcess (context, data) {
    context.commit('MODAL_REGISTER', data)
  }
}
