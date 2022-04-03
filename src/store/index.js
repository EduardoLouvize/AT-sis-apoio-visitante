import { createStore } from 'vuex'

export default createStore({
  state: {
    registro: [],
    logado: false,
    userNow: '',
    alerta: false
  },
  mutations: {
    salvarSenha(state, payload) {
      state.registro.push(payload)
    },
    logout(state, payload) {
      state.logado = payload
    },
    verificarSenha(state, payload) {
      for (let index = 0; index < state.registro.length; index++) {
        payload
        if (state.registro[index].user == payload.user && state.registro[index].senha == payload.senha) {
          state.logado = true
          state.userNow = payload.user
        }
      }
    },
    alertaSucesso(state, payload) {
      state.alerta = payload
    },
    fechar(state, payload) {
      state.alerta = payload
    },
  },
  actions: {
    fechar(context, payload) {
      context.commit('fechar', payload)
    },
    salvarSenha(context, payload) {
      context.commit('salvarSenha', payload)
    },
    verificarSenha(context, payload) {
      context.commit('verificarSenha', payload)

    },
    alertaSucesso(context, payload) {
      context.commit('alertaSucesso', payload)
    },
    logout(context, payload) {
      context.commit('logout', payload)
    }
  }
})