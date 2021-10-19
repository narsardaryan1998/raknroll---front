export const actions = {
  getData({commit}, params) {
    return this.$axios.get('/api/products', {params}).then(response => {
      commit('updateData', response.data);
    })
  }
};

export const mutations = {
  updateData(state, data) {
    state.data = data;
  },
  addProductToCart(state, data) {
    if (state.data.products) {
      let product = state.data.products.find(product => product.id === data.productId)
      if (product) {
        product.cart_product = data.cart_product
      }
    }
  },
  deleteCartProduct(state, productId) {
    if (state.data.products) {
      let product = state.data.products.find(product => product.id === productId)
      if (product) {
        product.cart_product = null
      }
    }
  },
  addProductToFavorites(state, data) {
    state.data.products[data.index].favorite_product = data.cart_product;
  },
  deleteFavoriteProduct(state, productId) {
    if (state.data.products) {
      let product = state.data.products.find(product => product.id === productId)
      if (product) {
        product.favorite_product = null
      }
    }
  },
};

export const state = () => ({
  data: [],
});

export const getters = {
  data: state => state.data,
};
