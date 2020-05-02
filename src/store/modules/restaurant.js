import axios from 'axios';
import to from 'await-to-js';

const state = {
    reviews: [],
    restaurantId: null,
}

const mutations = {
    setReviews (state, payload) {
        state.reviews = payload
    },

    setRestaurant(state, restaurantId) {
        state.restaurantId = restaurantId;
    }
}

const getters = {

}

const actions = {

    async getReviews ({commit, rootState}) {
        const restaurantId = rootState.restaurant.restaurantId;
        const response = await axios.get(`/restaurant/${restaurantId}/reviews`)
        commit('setReviews', response)
    },

    async getRestaurant({ commit }, auth0Id) {
        const [err, response] = await to(axios.get(`/restaurant/${auth0Id}`))
        if(err) throw new Error(err.message)
        commit('setRestaurant', response._id)
    },

    async createRestaurant({ commit }, auth0Id) {
        const [err, response] = await to(axios.post('/restaurant', {auth0Id}));
        if(err) throw new Error(err.message)
        commit('setRestaurant', response._id)
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
