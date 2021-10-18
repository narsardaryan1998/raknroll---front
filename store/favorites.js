export const actions = {
  getData({commit}, params) {
    return this.$axios.get('/api/favorites', {params}).then(response => {
      commit('updateData', response.data);
    })
  },
  getCount({commit}) {
    return this.$axios.get('/api/favorites/count').then(response => {
      commit('updateCount', response.data);
    })
  },
  store({commit}, params) {
    return this.$axios.post('/api/favorites/store', params).then(response => {
      return response;
    })
  },
  delete({commit}, params) {
    return this.$axios.post('/api/favorites/delete', params).then(response => {
      return response;
    })
  },
};

export const mutations = {
  updateData(state, data) {
    state.data = data;
  },
  updateCount(state, count) {
    state.count = count;
  },
  deleteFavoriteProduct(state, index) {
    state.data.favoriteProducts.favorite_products.splice(index, 1);
  },
  changeCount(state, value) {
    state.count.count += value;
  },
};

export const state = () => ({
  data: [],
  count: 0,
});

export const getters = {
  data: state => state.data,
  count: state => state.count,
};
