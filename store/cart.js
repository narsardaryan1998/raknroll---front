import https from "https";

export const actions = {
  getData({commit}, params) {
    const httpsAgent = new https.Agent({rejectUnauthorized: false});
    return this.$axios.get('/api/cart', {params, httpsAgent}).then(response => {
      commit('values', response.data);
    })
  },
};

export const mutations = {
  values(state, data) {
    state.data = [];
    if (data && data.length) {
      let dataLength = data.length;
      let cartInStart = JSON.parse(localStorage.getItem('cart'));
      for (let i = 0; i < dataLength; i++) {
        let qty = cartInStart.find(cart => data[i].id === cart.id).qty;
        qty = qty < data[i].min_quantity ? data[i].min_quantity : qty;
        state.data.push({
          id: data[i].id,
          name: data[i].name,
          qty,
          final_price: data[i].final_price,
          rating: data[i].rating,
          image: data[i].image,
          short_description: data[i].short_description,
          min_quantity: data[i].min_quantity ? data[i].min_quantity : 1,
        })
      }
      state.count = state.data.length;
      state.cartCurrentTotalPrice = state.data.reduce(function (accumulator, item) {
        return accumulator + item.final_price * item.qty;
      }, 0);
      localStorage.setItem('cart', JSON.stringify(state.data));
    } else {
      localStorage.removeItem('cart');
    }
  },
  add(state, product) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      let qty = product.min_quantity ? product.min_quantity : 1
      cart.push({
        id: product.id,
        name: product.name,
        final_price: product.final_price,
        short_description: product.short_description,
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
    state.data = cart;
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
      state.data = cart;
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
        state.data = cart;
      }
    }
  },

};

export const state = () => ({
  data: [],
  vazgen: [],
  count: 0,
  cartCurrentTotalPrice: 0,
});

export const getters = {
  count: state => state.count,
  cartCurrentTotalPrice: state => state.cartCurrentTotalPrice,
  data: state => state.data,
};
