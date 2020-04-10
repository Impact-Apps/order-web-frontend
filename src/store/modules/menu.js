import axios from 'axios';

const state = {
    menu: []
}

const mutations = {
    setMenu (state, payload) {
        state.menu = payload
    }
}

const getters = {
    getMenu: state => {
        return state.menu
    }
}

const actions = {

    async getMenu ({commit}, restaurantId) {
        const response = await axios.get(`/menu/${restaurantId}/items`)
        commit('setMenu', response)
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
