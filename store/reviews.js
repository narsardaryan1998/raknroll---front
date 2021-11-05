import https from "https";

export const actions = {
  getData({commit}, params) {
    const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    return this.$axios.get('/api/review', {params, httpsAgent}).then(response => {
      commit('updateData', response.data);
    })
  },
  store({commit}, params) {
    return this.$axios.post('/api/review/store', params).then(response => {
      return response;
    })
  },
};

export const mutations = {
  updateData(state, data) {
    state.data = data;
  }
};

export const state = () => ({
  data: [],
});

export const getters = {
  data: state => state.data,
};
