export const state = () => ({
  data: [],
});

export const mutations = {
  updateData(state, data) {
    state.data = data;
  },
  addProductToCart(state, data) {
    state.data.products[data.index].cart_product = data.cart_product;
  },
  deleteCartProduct(state, index) {
    state.data.products[index].cart_product = null;
  },
  addProductToFavorites(state, data) {
    state.data.products[data.index].favorite_product = data.cart_product;
  },
  deleteFavoriteProduct(state, index) {
    state.data.products[index].favorite_product = null;
  },
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
