export default {
  namespaced: true,
  actions: {
    getData({commit}, params) {
      return this.$axios.get('/api/products', {params}).then(response => {
        commit('updateData', response.data);
      })
    }
  },

  mutations: {
    updateData(state, data) {
      state.data = data;
    }
  },

  state: {
    data: [],
  },

  getters: {
    data: state => state.data,
  },
}
