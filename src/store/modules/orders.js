 import axios from 'axios';
 import { filter } from 'lodash'

const state = {
    orders: []
}

const mutations = {
    setOrders (state, payload) {
        state.orders = payload
    }
}

const getters = {
    getOrders: state => {
        return state.orders
    },

    getFilteredOrders: state => filterObj => {
        console.log(filterObj)
        return filter(state.orders, filterObj)
    }
}

const actions = {

    async getOrders ({commit}, filter) {
        const params = {
            filter,
        }
        const response = await axios.get('/order/', { params })
        commit('setOrders', response)
    },

    async updateOrderStatus({ dispatch, rootState }, {orderId, status}) {
        const restaurantId = rootState.user.restaurantId;
        await axios.patch(`/order/${orderId}`, { status })
        dispatch('getOrders', {restaurantId, status: { $in: ["pending", "active"]}})
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
