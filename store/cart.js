import https from "https";

export const actions = {
  getData({commit}, params) {
    const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    return this.$axios.get('/api/cart', {params, httpsAgent}).then(response => {
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
  updateCartProductQty(state, data) {
    state.data.cartProducts.cart_products[data.index].qty += data.value;
  },
  deleteCartProduct(state, index) {
    state.data.cartProducts.cart_products.splice(index, 1);
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
