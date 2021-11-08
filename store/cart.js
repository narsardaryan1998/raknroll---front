import https from "https";

export const actions = {
  getData({commit}, params) {
    const httpsAgent = new https.Agent({rejectUnauthorized: false});
    return this.$axios.get('/api/cart', {params, httpsAgent}).then(response => {
      commit('updateData', response.data);
    })
  },
};

export const mutations = {
  updateData(state, data) {
    state.data = data;
  },
  values(state) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart && cart.length) {
      state.storageData = cart;
      state.count = cart.length;
      state.cartCurrentTotalPrice = cart.reduce(function (accumulator, item) {
        return accumulator + item.final_price * item.qty;
      }, 0);
    }
  },
  add(state, product) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      let qty = product.min_quantity ? product.min_quantity : 1
      console.log(qty);
      cart.push({
        id: product.id,
        name: product.name,
        final_price: product.final_price,
        short_description: product.short_description,
        description: product.description,
        image: product.image,
        rating: product.rating,
        min_quantity: qty,
        qty,
      })
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      let qty = product.min_quantity ? product.min_quantity : 1
      cart = [
        {
          id: product.id,
          name: product.name,
          final_price: product.final_price,
          short_description: product.short_description,
          description: product.description,
          image: product.image,
          rating: product.rating,
          min_quantity: qty,
          qty,
        }
      ];
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    state.count++;
    state.cartCurrentTotalPrice = cart.reduce(function (accumulator, item) {
      return accumulator + item.final_price * item.qty;
    }, 0);
    state.storageData = cart;
  },
  delete(state, productId) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      cart = cart.filter(function (obj) {
        return productId !== obj.id;
      });
      if (cart.length) {
        localStorage.setItem('cart', JSON.stringify(cart));
        state.cartCurrentTotalPrice = cart.reduce(function (accumulator, item) {
          return accumulator + item.final_price * item.qty;
        }, 0);
      } else {
        state.cartCurrentTotalPrice = 0;
        localStorage.removeItem('cart');
      }
      state.count--;
      state.storageData = cart;
    }
  },
  updateQuantity(state, params) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      let product = cart.find(cart => cart.id === params.productId);
      if ((product.qty + params.value) >= product.min_quantity) {
        product.qty = product.qty + params.value;
        localStorage.setItem('cart', JSON.stringify(cart));
        state.cartCurrentTotalPrice = cart.reduce(function (accumulator, item) {
          return accumulator + item.final_price * item.qty;
        }, 0);
        state.storageData = cart;
      }
    }
  },

};

export const state = () => ({
  data: [],
  storageData: [],
  count: 0,
  cartCurrentTotalPrice: 0,
});

export const getters = {
  data: state => state.data,
  count: state => state.count,
  cartCurrentTotalPrice: state => state.cartCurrentTotalPrice,
  storageData: state => state.storageData,
};
