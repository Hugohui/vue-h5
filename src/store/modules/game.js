// 初始状态
const state = {
    gameInfo: {}
}

// actions
const actions = {
  getData({ commit }, data){
    commit('setData', data)
  }
}

// mutations
const mutations = {
  setData(state, data) {
    state.gameInfo = data
  }
}

export default {
  state,
  actions,
  mutations
}
