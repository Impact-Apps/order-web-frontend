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
    navigation: navigationStore,
    menu: menuStore,
    user: userStore,
    orders: orderStore,
    restaurant: restaurantStore
  },
  strict: process.env.NODE_ENV !== 'production'
})

export default store
