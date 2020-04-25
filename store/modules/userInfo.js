const state = () => ({
  username: ''
})

const mutations = {
  setUsername (state, val) {
    state.username = val
  }
}

const actions = {
  setUsername: ({ commit }, username) => {
    commit('setUsername', username)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
