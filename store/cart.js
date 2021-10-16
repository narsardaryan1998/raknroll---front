export const actions = {
  getData({commit}, params) {
    return this.$axios.get('/api/cart', {params}).then(response => {
      commit('updateData', response.data);
    })
  },
  getCount({commit}) {
    return this.$axios.get('/api/cart/count').then(response => {
      commit('updateCount', response.data);
    })
  },
  store({commit}, params) {
    return this.$axios.post('/api/cart/store', params).then(response => {
      return response;
    })
  },
  update({commit}, params) {
    return this.$axios.post('/api/cart/update', params).then(response => {
      return response;
    })
  },
  delete({commit}, params) {
    return this.$axios.post('/api/cart/delete', params).then(response => {
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
  updateItemQty(state, data) {
    state.data.cartItems.items[data.index].qty += data.value;
  },
  deleteItem(state, index) {
    state.data.cartItems.items.splice(index, 1);
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
