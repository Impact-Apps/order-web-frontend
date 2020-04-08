// https://github.com/chrisvfritz/vue-enterprise-boilerplate/tree/master/src/state
// https://vuex.vuejs.org/guide/
// Initial Vuex setup - We can decide on a concrete implementation later

import Vue from 'vue'
import Vuex from 'vuex'

import navigationState from './modules/navigation'
import menuStore from './modules/menu'
import userStore from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    navigationState: navigationState,
    menuState: menuStore,
    userStore: userStore
  },
  strict: process.env.NODE_ENV !== 'production'
})

export default store
