// https://github.com/chrisvfritz/vue-enterprise-boilerplate/tree/master/src/state
// https://vuex.vuejs.org/guide/
// Initial Vuex setup - We can decide on a concrete implementation later

import Vue from 'vue'
import Vuex from 'vuex'

import navigationState from './modules/navigation'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    navigationState: navigationState
  },
  strict: process.env.NODE_ENV !== 'production'
})

export default store
