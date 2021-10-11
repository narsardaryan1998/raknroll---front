import Vue from 'vue';
import Vuex from 'vuex';
import home from './home.js';
import products from './products.js';

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    modules: {
      products,
      home,
    },
  });
};
export default createStore;


