export const state = () => ({
  data: [],
});

export const mutations = {
  updateData(state, data) {
    state.data = data;
  }
};

export const actions = {
  getData({commit}, params) {
    return this.$axios.get('/api/products', {params}).then(response => {
      commit('updateData', response.data);
    })
  }
};

export const getters = {
  data: state => state.data,
};
