import https from "https";

export const actions = {
  getData({commit}, params) {
    const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    return this.$axios.get('/api/auth/user-by-slug', {params, httpsAgent}).then(response => {
      commit('updateData', response.data);
    })
  }
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
