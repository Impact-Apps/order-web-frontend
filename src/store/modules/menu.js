import MENU_API from '@/api/menu'

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

    async getMenu ({commit}, id) {
        const response = await MENU_API.getMenu(id)
        commit('setMenu', response)
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}
