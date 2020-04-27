// https://github.com/chrisvfritz/vue-enterprise-boilerplate/tree/master/src/state
// https://vuex.vuejs.org/guide/
// Initial Vuex setup - We can decide on a concrete implementation later

import Vue from 'vue'
import Vuex from 'vuex'

import navigationStore from './modules/navigation'
import menuStore from './modules/menu'
import userStore from './modules/user'
import orderStore from './modules/orders'
import restaurantStore from "./modules/restaurant";

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    navigationState: navigationStore,
    menuState: menuStore,
    userStore: userStore,
    orderStore: orderStore,
    restaurantStore: restaurantStore
  },
  strict: process.env.NODE_ENV !== 'production'
})

export default store
