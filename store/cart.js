export const state = () => ({
  data: [],
});

export const mutations = {
  updateData(state, data) {
    state.data = data;
  }
};

export const actions = {
  getData({commit}) {
    return this.$axios.get('/api/cart').then(response => {
      commit('updateData', response.data);
    })
  },
  store({commit}, params) {
    return this.$axios.post('/api/cart/store', params).then(response => {
      return response;
    })
  },
};

export const getters = {
  data: state => state.data,
};
