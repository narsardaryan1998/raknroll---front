import * as https from "https";

export const actions = {
  getData({commit}, params) {
    const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    return this.$axios.get('/api/home', {params, httpsAgent}).then(response => {
      commit('updateData', response.data);
    })
  }
};

export const mutations = {
  updateData(state, data) {
    state.data = data;
  },
  addProductToCart(state, data) {
    if (state.data.discountedProducts) {
      let product = state.data.discountedProducts.find(product => product.id === data.productId);
      if (product) {
        product.cart_product = data.cart_product
      }
    }
  },
  addProductToFavorites(state, data) {
    state.data.discountedProducts[data.index].favorite_product = data.favorite_product;
  },
  deleteCartProduct(state, productId) {
    if (state.data.discountedProducts) {
      let product = state.data.discountedProducts.find(product => product.id === productId);
      if (product) {
        product.cart_product = null
      }
    }
  },
  deleteFavoriteProduct(state, productId) {
    if (state.data.discountedProducts) {
      let product = state.data.discountedProducts.find(product => product.id === productId);
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
