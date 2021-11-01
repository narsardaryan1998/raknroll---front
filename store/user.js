import https from "https";

export const actions = {
  getData({commit}) {
    const httpsAgent = new https.Agent({rejectUnauthorized: false});
    return this.$axios.get('/api/auth/user', {httpsAgent}).then(response => {
      commit('updateData', response.data);
    })
  },
  update({commit}, form) {
    return this.$axios.post('/api/auth/user/update', form)
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
