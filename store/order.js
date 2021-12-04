export const actions = {
  getData({commit}, params) {
    return this.$axios.get('/api/order', {params}).then(response => {
      commit('updateData', response.data);
    })
  },
  store({commit}, params) {
    return this.$axios.post('/api/order/store', params).then(response => {
      return response;
    })
  },
};

export const mutations = {
  updateData(state, data) {
    state.data = data;
  },
  setCustomerOrderInformation(state) {
    state.customerOrderInformation = JSON.parse(localStorage.getItem('customerOrderInformation'));
  },
};

export const state = () => ({
  data: [],
  customerOrderInformation: false,
});

export const getters = {
  data: state => state.data,
  customerOrderInformation: state => state.customerOrderInformation,
};
