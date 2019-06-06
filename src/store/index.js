/**
 * 组装模块并导出 store
 */

import Vue from 'vue'
import Vuex from 'vuex'
import game from './modules/game'
import * as actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  userInfo:{}
}

export default new Vuex.Store({
  state: state,
  actions: actions,
  mutations: mutations,
  getters:getters,
  modules: {
    game,
  },
  strict: debug
})
