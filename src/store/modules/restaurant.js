import RESTAURANT_API from '@/api/restaurant'

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
        const response = await RESTAURANT_API.getReviews(id)
        commit('setReviews', response)
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}
