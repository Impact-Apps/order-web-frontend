const state = {
    drawer: true
}

const mutations = {
    setDrawer (state, payload) {
        state.drawer = payload
    }
}

const getters = {
    getDrawer: state => {
        return state.drawer
    }
}

const actions = {

}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}
