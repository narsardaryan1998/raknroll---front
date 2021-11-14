export const actions = {
  getData({commit}, params) {
    return this.$axios.get('/api/products', {params}).then(response => {
      commit('updateData', response.data);
    })
  },
  getRecommendedProducts({commit}, params) {
    return this.$axios.get('/api/products/recommended', {params}).then(response => {
      commit('updateRecommendedProducts', response.data);
    })
  },
};

export const mutations = {
  updateData(state, data) {
    state.data = data;
  },
  updateRecommendedProducts(state, data) {
    state.recommendedProducts = data;
  },
};

export const state = () => ({
  data: [],
  recommendedProducts: [],
});

export const getters = {
  data: state => state.data,
  recommendedProducts: state => state.recommendedProducts,
};
