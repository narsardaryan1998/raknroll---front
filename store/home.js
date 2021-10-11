export default {
  namespaced: true,
  actions: {
    getHomePageData({commit}, params) {
      return this.$axios.get('/api/products', {params}).then(response => {
        commit('updateHomeData', response.data);
      })
    }
  },

  mutations: {
    updateHomeData(state, homeData) {
      state.homeData = homeData;
    }
  },

  state: {
    homeData: [],
  },

  getters: {
    homeData: state => state.homeData,
  },
}
