import ORDER_API from '@/api/order'

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
    }
}

const actions = {

    async getOrders ({commit}, id) {
        const response = await ORDER_API.getOrders(id)
        commit('setOrders', response)
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}
