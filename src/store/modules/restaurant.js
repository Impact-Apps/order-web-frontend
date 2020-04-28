import axios from 'axios';

const state = {
    reviews: []
}

const mutations = {
    setReviews (state, payload) {
        state.reviews = payload
    }
}

const getters = {
    getReviews: state => {
        return state.reviews
    }
}

const actions = {

    async getReviews ({commit}, id) {
        const response = await axios.get(`/restaurant/${id}/reviews`)
        commit('setReviews', response)
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
